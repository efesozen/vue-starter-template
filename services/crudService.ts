export default ($axios: any, resource: string, logger: any) => ({
  async fetchAll() {
    try {
      const response = await $axios.get(`/${resource}`);
      return response;
    } catch (error) {
      logger.error("fetchError", resource);
      throw error;
    }
  },

  async fetchAllWithPagination(page = 1, perPage = 10) {
    try {
      const response = await $axios.get(
        `/${resource}?page=${page}&limit=${perPage}`
      );
      return response;
    } catch (error) {
      logger.error("fetchError", resource);
      throw error;
    }
  },

  async fetchAllWithPaginationAndFilters(page = 1, perPage = 10, filters: []) {
    try {
      const response = await $axios.post(
        `/${resource}/filter?page=${page}&limit=${perPage}`,
        { filters }
      );
      return response;
    } catch (error) {
      logger.error("fetchError", resource);
      throw error;
    }
  },

  async fetchById(id: number) {
    try {
      const response = await $axios.get(`/${resource}/${id}`);
      return response;
    } catch (error) {
      logger.error("fetchByIdError", resource, id);
      throw error;
    }
  },

  async create(data: any) {
    try {
      const response = await $axios.post(`/${resource}`, data);
      return response;
    } catch (error) {
      logger.error("createError", resource);
      throw error;
    }
  },

  async createWithFile(data: any) {
    try {
      const response = await $axios.post(`/${resource}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      logger.error("createError", resource);
      throw error;
    }
  },

  async update(id: number, data: any) {
    try {
      const response = await $axios.put(`/${resource}/${id}`, data);
      return response;
    } catch (error) {
      logger.error("updateError", resource, id);
      throw error;
    }
  },

  async patch(id: number, data: any) {
    try {
      const response = await $axios.patch(`/${resource}/${id}`, data);
      return response;
    } catch (error) {
      logger.error("patchError", resource, id);
      throw error;
    }
  },

  async delete(id: number) {
    try {
      await $axios.delete(`/${resource}/${id}`);
    } catch (error) {
      logger.error("deleteError", resource, id);
      throw error;
    }
  },
});