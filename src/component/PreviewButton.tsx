import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const PreviewButton = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-4">Preview PDF</h1>
      <BlobProvider document={<MyDocument />}>
        {({ url, loading, error }) => {
          if (loading) return <button disabled>Generating PDF...</button>;
          if (error) return <p>Error in PDF generation: {error.message}</p>;

          return (
            // Ensure href is undefined if url is null
            <a
              href={url ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Preview PDF
              </button>
            </a>
          );
        }}
      </BlobProvider>
    </div>
  );
};

export default PreviewButton;
