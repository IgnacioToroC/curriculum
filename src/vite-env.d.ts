/// <reference types="vite/client" />

declare module "html2pdf.js" {
  interface Html2PdfOptions {
    margin?: number | number[];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      backgroundColor?: string;
      logging?: boolean;
      [key: string]: unknown;
    };
    jsPDF?: {
      unit?: string;
      format?: string;
      orientation?: string;
      [key: string]: unknown;
    };
    pagebreak?: { mode?: string | string[]; before?: string[]; after?: string[]; avoid?: string[] };
  }

  interface Html2PdfInstance {
    set(opt: Html2PdfOptions): Html2PdfInstance;
    from(element: HTMLElement): Html2PdfInstance;
    save(): Promise<void>;
    output(type: string, options?: unknown): Promise<unknown>;
    toPdf(): Html2PdfInstance;
    get(type: string): Promise<unknown>;
  }

  function html2pdf(): Html2PdfInstance;
  namespace html2pdf {
    function set(opt: Html2PdfOptions): Html2PdfInstance;
    function from(element: HTMLElement): Html2PdfInstance;
  }

  export default html2pdf;
}
