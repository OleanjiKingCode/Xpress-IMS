import { TabsProps } from 'antd';
import { BarcodeUpload } from '../Upload/BarcodeUpload';
import BulkUpload from '../Upload/BulkUpload';
import ManualUpload from '../Upload/ManualUpload';


export const TabItems: TabsProps['items'] = [
  {
    key: '1',
    label: 'Single Upload',
    children: <ManualUpload />,
  },
  {
    key: '2',
    label: 'Bulk Upload',
    children: <BulkUpload />,
  },
  {
    key: '3',
    label: 'Using Barcode',
    children: <BarcodeUpload />,
  },
];
