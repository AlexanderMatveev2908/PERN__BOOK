import SearchBar from "@/common/forms/SearchBar/SearchBar";
import WrapPageAPI from "@/components/HOC/WrapPageAPI";
import {
  fieldsSearchStore,
  numericFiltersStore,
  sorterStore,
  storeFilters,
} from "@/core/config/fieldsData/SearchBar/owner/store";
import { useFormCtxConsumer } from "@/core/contexts/FormsCtx/hooks/useFormCtxConsumer";
import { FC } from "react";
import { FormProvider } from "react-hook-form";
import WrapperContentAPI from "@/components/HOC/WrapperContentAPI";
import { useGetU } from "@/core/hooks/all/useGetU";
import { bookStoreSliceAPI } from "@/features/OwnerLayout/bookStores/bookStoreSliceAPI";
import { __cg, isArr } from "@/core/lib/lib";
import BookStoreItemOwner from "./components/BookStoreItem";

const BookStores: FC = () => {
  const { user } = useGetU();

  // ? I DECIDED TO HANDLE THE REQUEST OF DATA INSIDE BUTTONS OF SEARCH__BAR TO ENCAPSULATE LOGIC AND AVOID REPEATING SAME CODE WITH ALMOST NONE DIFFERENCES

  const { formOwnerStoresCtx: formCtx } = useFormCtxConsumer();
  const { handleSubmit } = formCtx;
  const handleSave = handleSubmit(() => {
    __cg("submitted ✌🏼");
  });

  const hook = bookStoreSliceAPI.endpoints.getAllStores.useLazyQuery();
  // eslint-disable-next-line
  const [_, res] = hook;
  const { data: { bookStores } = {} } = res ?? {};

  return (
    <WrapPageAPI
      {...{
        canStay: user?.isOwner,
      }}
    >
      <div className="parent__page -mb-[175px]">
        <FormProvider {...formCtx}>
          <SearchBar
            {...{
              hook,
              handleSave,
              txtInputs: fieldsSearchStore,
              filters: storeFilters,
              numericFilters: numericFiltersStore,
              sorters: sorterStore,
            }}
          />
        </FormProvider>

        <WrapperContentAPI {...{ formCtx, hook }}>
          <div className="parent__cards">
            {isArr(bookStores) &&
              bookStores!.map((el) => (
                <BookStoreItemOwner key={el.id} {...{ el }} />
              ))}
          </div>
        </WrapperContentAPI>
      </div>
    </WrapPageAPI>
  );
};

export default BookStores;
