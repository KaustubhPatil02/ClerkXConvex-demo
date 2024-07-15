import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
// import { Id } from "convex/dist/cjs-types/values/value";

export const createFile = mutation({
    args: {
      name: v.string(),
      orgId: v.optional(v.string()).default(""),
    },
    async handler(ctx, args) {
      await ctx.db.insert("files", {
        name: args.name,
        orgId:args.orgId,
      });
    },
});

export const getFiles = query({
  args: {
    orgId: v.string()
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
      // console.log(identity);
    if (!identity) {      
      return [];
    }
    return await ctx.db
    .query("files")
    .withIndex("by_orgId", q=>q.eq('orgId', args.orgId)
    ).collect();
  },
});
