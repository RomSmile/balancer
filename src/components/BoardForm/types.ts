import { updateOrderItemParams } from '../../types';

export interface IBoardForm {
  onClose: () => void;
  boardItem?: updateOrderItemParams;
  onSaveCallBack?: () => void;
  isAbsolute?: boolean;
}

export interface IFormWrapper {
  isAbsolute: boolean;
}
