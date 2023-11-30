import { updateOrderItemParams } from '../../../../types';

export interface IBoardForm {
  onClose: () => void;
  boardItem?: updateOrderItemParams;
}
