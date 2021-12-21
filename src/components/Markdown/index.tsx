import React, { useState } from 'react';
import Editor from 'md-editor-rt';
import sanitizeHtml from 'sanitize-html';
import Md from './md.md';
import 'md-editor-rt/lib/style.css';

export default function Markdown() {
  const [text, setText] = useState<any>(Md);
  const [toolbars] = useState<string[]>([
    'bold',
    'underline',
    'italic',
    '-',
    'strikeThrough',
    'sub',
    'sup',
    'quote',
    'unorderedList',
    'orderedList',
    '-',
    'codeRow',
    'code',
    'link',
    'image',
    'table',
    'mermaid',
    '-',
    'revoke',
    'next',
    'save',
    '=',
    'pageFullscreen',
    'fullscreen',
    'preview',
    'htmlPreview',
    'catalog',
  ]);
  const onUploadImg = async (
    files: FileList,
    callback: (urls: string[]) => void,
  ) => {
    const res = await Promise.all(
      Array.from(files).map((file) => {
        return new Promise((rev, rej) => {
          const form = new FormData();
          form.append('file', file);
          console.log(file, 'files...');
          // axios
          // .post('/api/img/upload', form, {
          //   headers: {
          //     'Content-Type': 'multipart/form-data'
          //   }
          // })
          // .then((res) => rev(res))
          // .catch((error) => rej(error));
        });
      }),
    );
    callback(res.map((item: any) => item.data.url));
  };

  return (
    <Editor
      toolbars={toolbars}
      modelValue={text}
      onChange={setText}
      sanitize={(html) => sanitizeHtml(html)}
      onUploadImg={onUploadImg}
    />
  );
}
