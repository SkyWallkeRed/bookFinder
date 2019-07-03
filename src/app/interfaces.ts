export interface UserInterface {
  name: string;
}

export interface InputInterface {
  placeHolder: string;
  btnText: string;
  isBtn: boolean;
  autoComp: {
    isActive: boolean;
    value: string;
  };
}
