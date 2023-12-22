type TreeViewProps = {
    files: File[];
  };
  
  export const TreeView = (props: TreeViewProps) => {
    const renderTree = (files: File[]) => (
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.isDirectory ? (
              <>
                {file.name}
                {renderTree(file.isDirectory)}
              </>
            ) : (
              file.name
            )}
          </li>
        ))}
      </ul>
    );
  
    return (
      <div>
        <h2>Tree View</h2>
        {renderTree(props.files)}
      </div>
    );
  };