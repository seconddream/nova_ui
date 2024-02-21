import { text } from "stream/consumers";
import Tooltips from "../Tooltips";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { WithPlacement } from "../../common/shared_interfaces";

export interface ButtonProps extends ButtonBaseProps, WithPlacement{
  tooltips?: string
}

export function Button(props: ButtonProps){
  const {tooltips, position, ...bottonBaseProps} = props
  if(tooltips){
    return <Tooltips text={tooltips} position={position}><ButtonBase {...bottonBaseProps} /></Tooltips>
  }else{
    return <ButtonBase {...bottonBaseProps} />
  }
}