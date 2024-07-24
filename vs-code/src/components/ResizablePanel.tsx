import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
    defaultLayout: number[];
    rightPanel: ReactNode;
    leftPanel: ReactNode;
    showLeftPanel: boolean;
}

const ResizablePanel = ({defaultLayout,rightPanel,leftPanel,showLeftPanel }: IProps) => {
    const onLayout = (sizes: number[]) => {
      document.cookie = `react-resizable-panels:layout=${JSON.stringify(
        sizes
      )}`;
    };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout}>
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]}>{leftPanel}</Panel>
          <PanelResizeHandle className="w-[1px] bg-[#ffffff1f]" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};
export default ResizablePanel;
