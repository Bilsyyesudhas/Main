import { PlusOutlined } from "@ant-design/icons";
import { message } from "antd";
import { Upload as AntdUpload } from "antd";
import Label from "./Label";


const Upload = ({ SelectedImg, name, link, maxCount, listType, fileList, files }) => {

    const props = {
        name: 'img',
        action: link,
        async onChange(info) {
            const obj = info.file
            const rejin = obj.response

            if (info.file.status !== 'uploading') {
                // console.log('dddd')
                SelectedImg(obj.response.img)
                // console.log(info.file, info.fileList);
                // console.log(obj.response.img, 'info')
            }
            if (rejin.status === 'done') {
                message.success(`${info} file uploaded successfully`);
                // console.log('success')

            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <AntdUpload name="upload" {...props}
            listType={listType ? listType : 'text'}
            maxCount={maxCount}
            fileList={fileList}
        >
            <div>
                <PlusOutlined />
                <div
                    style={{
                        marginTop: 8,
                    }}
                >
                    Upload
                </div>
            </div>
            <Label>{files}</Label>
        </AntdUpload>
    )
}
export default Upload