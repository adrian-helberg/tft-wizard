class BaseApiService {
  resource: string;

  constructor(resource: string) {
    if (!resource) throw new Error("Resource is not provided");
    this.resource = resource;
  }

  getUrl(id = ""): string {
    return `${process.env.VUE_APP_URL}/${this.resource}/${id}`;
  }

  handleErrors(err: Error): void {
    console.log({ message: "Error: ", err });
  }

  async fetch(config: any = {}) {
    try {
      const response = await fetch(this.getUrl(), config);
      return await response.json();
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async fetchText(config: any = {}) {
    try {
      const response = await fetch(this.getUrl(), config);
      return await response.text();
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async get(id: string) {
    try {
      if (id) throw Error("ID is not provided");
      const response = await fetch(this.getUrl(id));
      return await response.json();
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

class ReadOnlyApiService extends BaseApiService {
  constructor(resource: string) {
    super(resource);
  }
}

class ModelApiService extends BaseApiService {
  constructor(resource: string) {
    super(resource);
  }

  async post(data: any = {}) {
    try {
      const response = await fetch(this.getUrl(), {
        method: "POST",
        body: JSON.stringify(data),
      });

      const { id }: any = response.json();
      return id;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async put(id: number, data = {}) {
    if (!id) throw Error("Id is not provided");
    try {
      const response = await fetch(this.getUrl(id + ""), {
        method: "PUT",
        body: JSON.stringify(data),
      });
      const { id: responseId }: any = response.json();
      return responseId;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async delete(id: number) {
    if (!id) throw Error("Id is not provided");
    try {
      await fetch(this.getUrl(id + ""), {
        method: "DELETE",
      });
      return true;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

class UsersApiService extends ReadOnlyApiService {
  constructor() {
    super("users");
  }
}

class PostApiService extends ModelApiService {
  constructor() {
    super("posts");
  }
}

class AlbumsApiService extends ModelApiService {
  constructor() {
    super("albums");
  }

  async uploadImage() {
    console.log("Image has been uploaded");
    return true;
  }

  async triggerErrot() {
    try {
      throw Error("This error is triggered by api module");
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

class WebsiteApiService extends ReadOnlyApiService {
  constructor() {
    super("tierlist/team-comps");
  }
}

export const $api = {
  users: new UsersApiService(),
  posts: new PostApiService(),
  albums: new AlbumsApiService(),
  websiteData: new WebsiteApiService(),
};
