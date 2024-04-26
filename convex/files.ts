import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createFile = mutation({
  args: {
    // name: "string",
    name: v.string(),
    // this is a mutation, where a name of a files
  },
  async handler(ctx, args) {
    await ctx.db.insert("files", {
      name: args.name,
    });
  },
});

export const getFiles = query({
  args: {},
  async handler(ctx, args) {
    return await ctx.db.query("files").collect();
  },
});
