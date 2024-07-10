import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
// import { Id } from "convex/dist/cjs-types/values/value";

export const createFile = mutation({
    args: {
      name: v.string(),
      orgId: v.string(),
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
    orgId: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
      // console.log(identity);
    if (!identity) {
      throw new ConvexError("Not authenticated");
      return [];
    }
    return await ctx.db.query("files").collect();
  },
});

// export const deleteFiles = mutation({
//   args: {
//     ids: v.array(v.string()),
//   },
//   async handler(ctx, args) {
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) {
//       throw new ConvexError("Not authenticated");
//     }

//     for (const id of args.ids) {
//       // await ctx.db.delete("files", id);
//       // await ctx.db.delete(`files/${id}`);
//     }
//   },
// });


// export const deleteFiles = mutation({
//   args: {
//     ids: v.array(v.string()),
//   },
//   async handler(ctx, args) {
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) {
//       throw new ConvexError("Not authenticated");
//     }

//     for (const id of args.ids) {
//       const fileId: Id<"files"> = id; // Create an Id<"files"> object
//       await ctx.db.delete(fileId);
//     }
//   },
// });