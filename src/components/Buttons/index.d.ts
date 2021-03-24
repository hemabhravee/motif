declare namespace Button {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface IButton {}
  export interface IActionButtonProps {
    text: string;
    link: string;
    startIcon: React.ReactNode;
    endIcon: React.ReactNode;
  }
}
