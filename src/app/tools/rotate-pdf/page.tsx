"use client";

import { Button } from "@/components/ui/button";
import { FileUpload, FileUploadDropzone } from "@/components/ui/file-upload";
import { CloudUpload, RotateCw, ZoomIn, ZoomOut } from "lucide-react";
import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument, degrees } from "pdf-lib";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { toast } from "sonner";
import Script from 'next/script';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const RotatePdf = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onFileValidate = useCallback(
    (file: File): string | null => {
      if (!file.type.includes("pdf")) {
        return "只允许上传pdf文件";
      }
      return null;
    },
    [files]
  );

  const onFileReject = useCallback((file: File, message: string) => {
    toast.error(`文件导入出错：${message}`, {
      position: "top-right",
      duration: 5000,
    });
  }, []);

  const [numPages, setNumPages] = useState<number>();
  const [rotation, setRotation] = useState<number[]>([]); // 用于存储每页的旋转角度
  const loadSuccess = async ({ numPages }: { numPages: number }) => {
    setRotation(new Array(numPages).fill(0));
    setNumPages(numPages);
  };
  const rotatePage = async (pageIndex: number, angle: number) => {
    const newRotation = [...rotation];
    newRotation[pageIndex] = newRotation[pageIndex] + angle;
    setRotation(newRotation);
  };
  const rotateAll = () => {
    const newRotation = [...rotation];
    newRotation.forEach((angle, index) => {
      newRotation[index] = angle + 90;
    });
    setRotation(newRotation);
  };

  const deleteFile = () => {
    setFiles([]);
    setNumPages(undefined);
    setRotation([]);
  };
  const exportPdf = async () => {
    if (files[0]) {
      const pdfDoc = await PDFDocument.load(await files[0].arrayBuffer());
      // 获取所有页面
      const pages = pdfDoc.getPages();

      // 对每一页应用旋转设置
      pages.forEach((page, index) => {
        page.setRotation(
          degrees((page.getRotation().angle + rotation[index]) % 360)
        );
      });
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      // 使用原生 JavaScript 实现下载
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = files[0].name.replace(".pdf", "(pdf.ai-rotated).pdf"); // 修改文件名
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url); // 释放对象 URL
    }
  };
  const [pdfItemWidth, setPdfItemWidth] = useState<number>(100);
  const bigger = () => {
    setPdfItemWidth(pdfItemWidth + 50);
  };
  const smaller = () => {
    setPdfItemWidth(pdfItemWidth - 50);
  };
  return (
    <>
    <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://ai-pdf-rotate.vercel.app',
            '@type': 'SoftwareApplication',
            name: 'PDF旋转工具',
            description: '免费在线旋转PDF文件，无需上传，本地处理保障隐私安全。支持批量页面旋转，实时预览，简单易用。',
            url: `https://ai-pdf-rotate.vercel.app/tools/rotate-pdf`,
          }),
        }}
      />
    <div className="bg-[#f7f5ee] text-black">
      <div className="max-w-screen-md mx-auto py-20 space-y-5">
        <div className="text-center !mb-10 space-y-5">
          <h1 className="text-5xl font-serif">旋转 PDF 页面</h1>
          <p className="mt-2 text-gray-600 max-w-lg mx-auto">
            只需点击页面即可旋转。然后，您就可以下载修改后的 PDF。
          </p>
        </div>
        {files.length > 0 && (
          <>
            <div className="flex justify-center items-center space-x-3 selecto-ignore">
              <Button
                size="lg"
                className="bg-[#ff612f] hover:bg-[#ff612f]"
                onClick={rotateAll}>
                旋转全部
              </Button>
              <Button size="lg" className="w-fit" onClick={deleteFile}>
                删除PDF
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#ff612f] shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
                onClick={bigger}
                disabled={pdfItemWidth >= 500}>
                <ZoomIn />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#ff612f] shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
                onClick={smaller}
                disabled={pdfItemWidth <= 100}>
                <ZoomOut />
              </Button>
            </div>
            <Document
              className="flex gap-[20px] justify-center items-center flex-wrap"
              file={files[0]}
              onLoadSuccess={({ numPages }) => loadSuccess({ numPages })}>
              {numPages &&
                Array.from({ length: numPages }).map((_, index) => (
                  <div
                    key={index}
                    className="relative w-[fit-content] shadow-md p-3 pb-[40px] bg-white hover:bg-gray-50 overflow-hidden">
                    <div
                      className="absolute z-10 top-1 right-1 rounded-full p-1 hover:scale-105 hover:fill-white bg-[#ff612f] fill-white cursor-pointer"
                      onClick={() => rotatePage(index, 90)}>
                      <RotateCw size={14} color="white" />
                    </div>
                    <span className="absolute -translate-x-1/2 bottom-[10px] left-2/4 z-10">
                      {index + 1}
                    </span>
                    <div
                      className={`transition-transform duration-500 ease-in-out transform`}
                      style={{ transform: `rotate(${rotation[index]}deg)` }}>
                      <Page
                        key={`page_${index}`}
                        pageNumber={index + 1}
                        width={pdfItemWidth}
                      />
                    </div>
                  </div>
                ))}
            </Document>
            <div className="flex flex-col justify-center items-center space-y-3 selecto-ignore">
              <Button
                size="lg"
                className="bg-[#ff612f] hover:bg-[#ff612f]"
                onClick={exportPdf}>
                下载
              </Button>
            </div>
          </>
        )}
        {!files.length && (
          <div className="max-w-[250px] h-[300px] mx-auto">
            <FileUpload
              value={files}
              onValueChange={setFiles}
              onFileValidate={onFileValidate}
              onFileReject={onFileReject}
              accept=".pdf"
              className="w-full max-w-md h-full">
              <FileUploadDropzone className="h-full">
                <div className="flex flex-col items-center gap-[20px] justify-center h-full">
                  <div className="flex items-center justify-center rounded-full border p-2.5">
                    <CloudUpload className="size-6 text-muted-foreground" />
                  </div>
                  <p className="font-medium text-sm">单击上传或拖放</p>
                </div>
              </FileUploadDropzone>
            </FileUpload>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default RotatePdf;
