import { For, createSignal, onCleanup } from 'solid-js';
import { TreeView } from './TreeView';

type File = {
  name: string;
  path: string;
  isDirectory: boolean;
};

export const FileList = () => {
  const [files, setFiles] = createSignal<File[]>([]);
  const [showTreeView, setShowTreeView] = createSignal(false);

  const addUniqFiles = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    const newFiles = Array.from(input.files || []);

    const uniqueFiles = new Set(files().map((file) => file.name));
    const updatedFiles = newFiles.filter((file) => !uniqueFiles.has(file.name))
    const sortedFiles = [...files(), ...updatedFiles].sort((a, b) => a.name.localeCompare(b.name));

    setFiles(sortedFiles);
  };
  

  // const processFile = (file: File) => {
  //   // Additional processing logic for files and directories can be added here
  //   if (file.isDirectory) {
  //     // const directoryFiles = await fetchFilesFromDirectory(file.path);
  //     console.log(`processFile: directoryFiles: ${directoryFiles}`)
  //     // return [file, ...directoryFiles];
  //   } else {
  //     console.log(`processFile: file: ${file} ${file.name} ${file.path}`)
  //     return [file];
  //   }
  //   return [file];
  // };

  const fetchFilesFromDirectory = async (directoryPath: string): Promise<File[]> => {
    try {
      const filesInDirectory = await fs.promises.readdir(directoryPath);
      const filesInfo = await Promise.all(
        filesInDirectory.map(async (fileName) => {
          const filePath = `${directoryPath}/${fileName}`;
          const fileStat = await fs.promises.stat(filePath);
          return {
            name: fileName,
            path: filePath,
            isDirectory: fileStat.isDirectory(),
          };
        })
      );

      const subDirectoryFiles = await Promise.all(
        filesInfo
          .filter((file) => file.isDirectory)
          .map(async (subDirectory) => fetchFilesFromDirectory(subDirectory.path))
      );

      return filesInfo.concat(...subDirectoryFiles);
    } catch (error) {
      console.error(`Error fetching files from directory ${directoryPath}:`, error);
      return [];
    }
  };

  const toggleTreeView = () => {
    setShowTreeView(!showTreeView());
  };

  // Cleanup logic when component unmounts
  onCleanup(() => {
    // Additional cleanup logic can be added here
  });

  return (
    <div>
      <h2>File List</h2>
      <div>
        <label>
          Add Files:
          <input type="file" accept='audio/*, video/*' multiple onChange={addUniqFiles} />
        </label>
      </div>
      {/* <button onClick={toggleTreeView}>Toggle Tree View</button> */}
      {/* {showTreeView() ? <TreeView files={files()} /> : renderFileList(files())} */}
      {renderFileList(files())}
    </div>
  );
};

const renderFileList = (files: File[]) => (
  // <ul>
  //   {files.map((file, index) => (
  //     <li key={index}>{file.name}</li>
  //   ))}
  // </ul>
  <ul>
    <For each={files}>{(file, i) =>
      <li>
          {i() + 1}: {file.name}
      </li>
    }</For>
  </ul>
);