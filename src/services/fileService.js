import { saveAs } from 'file-saver';

const download = (folder, note) => {
  const blob = new Blob([note], { type: 'text/markdown;charset=utf-8' });
  saveAs(blob, `${folder}/${note}.md`);
};

export default { download };