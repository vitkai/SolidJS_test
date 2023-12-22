import { createSignal, onCleanup } from 'solid-js';
import { TreeView } from './TreeView';

type File = {
  name: string;
  path: string;
  isDirectory: boolean;
};

export const FileList = () => {
  const [files, setFiles] = createSignal<File[]>([]);
  const [showTreeView, setShowTreeView] = createSignal(false);

  const addFiles = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    const newFiles = Array.from(input.files || []);

    const updatedFiles = await Promise.all(newFiles.map(processFile));
    setFiles([...files(), ...updatedFiles]);
  };

  const processFile = async (file: File) => {
    // Additional processing logic for files and directories can be added here
    if (file.isDirectory) {
      const directoryFiles = await fetchFilesFromDirectory(file.path);
      return [file, ...directoryFiles];
    } else {
      return [file];
    }
  };

  const fetchFilesFromDirectory = async (directoryPath: string) => {
    // Implement logic to fetch files from the directory (recursively if needed)
    return [];
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
          <input type="file" multiple onChange={addFiles} />
        </label>
      </div>
      <button onClick={toggleTreeView}>Toggle Tree View</button>
      {showTreeView() ? <TreeView files={files()} /> : renderFileList(files())}
    </div>
  );
};

const renderFileList = (files: File[]) => (
  <ul>
    {files.map((file, index) => (
      <li key={index}>{file.name}</li>
    ))}
  </ul>
);