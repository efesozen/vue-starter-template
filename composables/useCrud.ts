import { ref } from "vue";

export function useCrud(resource: string) {
  const items = ref([]);
  const item = ref([]);
  const { $api }: any = useNuxtApp();
  const model = $api[`${resource}`];

  const fetchItems = async () => {
    const { data } = await model.fetchAll();
    items.value = data.items;
  };

  const fetchItemsWithPagination = async (page: number, perPage: number) => {
    return await model.fetchAllWithPagination(page, perPage);
  };

  const fetchAllWithPaginationAndFilters = async (
    page: number,
    perPage: number,
    filters: any
  ) => {
    return await model.fetchAllWithPaginationAndFilters(page, perPage, filters);
  };

  const fetchItem = async (id: number) => {
    const { data } = await model.fetchById(id);
    item.value = data.data;
    return data.data;
  };

  const convertToFormData = (item: any) => {
    const formData = new FormData();
    for (const key in item) {
      if (item[key] !== null && item[key] !== undefined) {
        formData.append(key, item[key]);
      }
    }
    return formData;
  };

  const createItem = async (item: any, type: string) => {
    const { data } =
      type === "formData"
        ? await model.createWithFile(convertToFormData(item))
        : await model.create(item);

    item.value = data.data;
    return data.data;
  };

  const updateItem = async (id: number, item: any) => {
    const { data } = await model.update(id, item);
    item.value = data.data;
    return data.data;
  };

  const patchItem = async (id: number, item: any) => {
    const { data } = await model.patch(id, item);
    item.value = data.data;
    return data.data;
  };

  const deleteItem = async (id: number) => {
    await model.delete(id);
  };

  return {
    items,
    item,
    fetchItems,
    fetchItemsWithPagination,
    fetchAllWithPaginationAndFilters,
    fetchItem,
    createItem,
    updateItem,
    patchItem,
    deleteItem,
  };
}