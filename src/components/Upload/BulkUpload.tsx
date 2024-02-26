import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

const props: UploadProps = {
  beforeUpload: (file) => {
    const fileName = file.name.toLowerCase();
    const isCSV = fileName.endsWith(".csv");
    const isXlsx = fileName.endsWith(".xlsx");
    if (!isCSV && !isXlsx) {
      message.error(`${file.name} is not a csv file`);
    }
    return isCSV || isXlsx || Upload.LIST_IGNORE;
  },

  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      "0%": "#108ee9",
      "100%": "#87d068",
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  },
};

const BulkUpload: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center h-[60vh] items-center gap-6">
      <span className="font-semibold">
        The .csv file should contain list of products and their details{" "}
      </span>
      <Upload {...props}>
        <Button icon={<UploadOutlined rev={undefined} />}>
          Upload csv file only
        </Button>
      </Upload>
    </div>
  );
};

export default BulkUpload;
