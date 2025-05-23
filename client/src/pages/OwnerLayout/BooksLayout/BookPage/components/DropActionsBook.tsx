import DropActionsObj from "@/components/elements/cards/shared/DropActionsHOC/DropActionsObj";
import { manageDropLabelGeneral } from "@/core/config/fieldsData/general/labels";
import { actionsBookPage } from "@/core/config/fieldsData/OwnerLayout/books/actions";
import { useWrapMutationAPI } from "@/core/hooks/hooks";
import {
  closePopup,
  loadPop,
  openPopup,
} from "@/features/common/Popup/popupSlice";
import { booksSLiceAPI } from "@/features/OwnerLayout/books/booksSliceAPI";
import { BookType } from "@/types/all/books";
import { BtnAct, BtnPopupKeys } from "@/types/types";
import { useCallback, useMemo, type FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type PropsType = {
  book: BookType;
};

const DropActionsBook: FC<PropsType> = ({ book }) => {
  const nav = useNavigate();

  const dispatch = useDispatch();
  const [mutateDelete] = booksSLiceAPI.useDeleteBookMutation();
  const { wrapMutationAPI } = useWrapMutationAPI();

  const handleOpenPopup = useCallback(
    () =>
      dispatch(
        openPopup({
          txt: "Are You sure about deleting this book ?",
          leftBtn: {
            label: "Delete",
            act: BtnAct.DEL,
            cb: async () => {
              dispatch(loadPop(BtnPopupKeys.LEFT));

              const res = await wrapMutationAPI({
                cbAPI: () => mutateDelete(book.id as string),
              });

              dispatch(closePopup());

              if (!res) return;

              nav(`/owner/book-store/${book.bookStoreID}`, { replace: true });
            },
          },
          rightBtn: {
            label: "Cancel",
            act: BtnAct.DO,
            cb: () => dispatch(closePopup()),
          },
        })
      ),
    [book, dispatch, mutateDelete, nav, wrapMutationAPI]
  );

  const handlers = useMemo(
    () => ({
      delete: handleOpenPopup,
      update: () => nav(`/owner/books/update/${book.id}`),
    }),
    [book, nav, handleOpenPopup]
  );

  return (
    <div className="w-full flex justify-end">
      <DropActionsObj
        {...{
          dropLabel: manageDropLabelGeneral,
          fields: actionsBookPage,
          handlers,
        }}
      />
    </div>
  );
};

export default DropActionsBook;
