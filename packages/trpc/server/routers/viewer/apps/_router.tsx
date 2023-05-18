import authedProcedure, { authedAdminProcedure } from "../../../procedures/authedProcedure";
import { router } from "../../../trpc";
import { ZListLocalInputSchema } from "./listLocal.schema";
import { ZQueryForDependenciesInputSchema } from "./queryForDependencies.schema";
import { ZSaveKeysInputSchema } from "./saveKeys.schema";
import { ZToggleInputSchema } from "./toggle.schema";
import { ZUpdateAppCredentialsInputSchema } from "./updateAppCredentials.schema";

type AppsRouterHandlerCache = {
  listLocal?: typeof import("./listLocal.handler").listLocalHandler;
  toggle?: typeof import("./toggle.handler").toggleHandler;
  saveKeys?: typeof import("./saveKeys.handler").saveKeysHandler;
  checkForGCal?: typeof import("./checkForGCal.handler").checkForGCalHandler;
  checkForGWorkspace?: typeof import("./googleWorkspaceHandler.handler").checkForGWorkspace;
  getUsersFromGWorkspace?: typeof import("./googleWorkspaceHandler.handler").getUsersFromGWorkspace;
  removeCurrentGoogleWorkspaceConnection?: typeof import("./googleWorkspaceHandler.handler").removeCurrentGoogleWorkspaceConnection;
  updateAppCredentials?: typeof import("./updateAppCredentials.handler").updateAppCredentialsHandler;
  queryForDependencies?: typeof import("./queryForDependencies.handler").queryForDependenciesHandler;
};

const UNSTABLE_HANDLER_CACHE: AppsRouterHandlerCache = {};

export const appsRouter = router({
  listLocal: authedAdminProcedure.input(ZListLocalInputSchema).query(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.listLocal) {
      UNSTABLE_HANDLER_CACHE.listLocal = await import("./listLocal.handler").then(
        (mod) => mod.listLocalHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.listLocal) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.listLocal({
      ctx,
      input,
    });
  }),

  toggle: authedAdminProcedure.input(ZToggleInputSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.toggle) {
      UNSTABLE_HANDLER_CACHE.toggle = await import("./toggle.handler").then((mod) => mod.toggleHandler);
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.toggle) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.toggle({
      ctx,
      input,
    });
  }),

  saveKeys: authedAdminProcedure.input(ZSaveKeysInputSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.saveKeys) {
      UNSTABLE_HANDLER_CACHE.saveKeys = await import("./saveKeys.handler").then((mod) => mod.saveKeysHandler);
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.saveKeys) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.saveKeys({
      ctx,
      input,
    });
  }),

  checkForGCal: authedProcedure.query(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.checkForGCal) {
      UNSTABLE_HANDLER_CACHE.checkForGCal = await import("./checkForGCal.handler").then(
        (mod) => mod.checkForGCalHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.checkForGCal) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.checkForGCal({
      ctx,
    });
  }),

  updateAppCredentials: authedProcedure
    .input(ZUpdateAppCredentialsInputSchema)
    .mutation(async ({ ctx, input }) => {
      if (!UNSTABLE_HANDLER_CACHE.updateAppCredentials) {
        UNSTABLE_HANDLER_CACHE.updateAppCredentials = await import("./updateAppCredentials.handler").then(
          (mod) => mod.updateAppCredentialsHandler
        );
      }

      // Unreachable code but required for type safety
      if (!UNSTABLE_HANDLER_CACHE.updateAppCredentials) {
        throw new Error("Failed to load handler");
      }

      return UNSTABLE_HANDLER_CACHE.updateAppCredentials({
        ctx,
        input,
      });
    }),

  queryForDependencies: authedProcedure
    .input(ZQueryForDependenciesInputSchema)
    .query(async ({ ctx, input }) => {
      if (!UNSTABLE_HANDLER_CACHE.queryForDependencies) {
        UNSTABLE_HANDLER_CACHE.queryForDependencies = await import("./queryForDependencies.handler").then(
          (mod) => mod.queryForDependenciesHandler
        );
      }

      // Unreachable code but required for type safety
      if (!UNSTABLE_HANDLER_CACHE.queryForDependencies) {
        throw new Error("Failed to load handler");
      }

      return UNSTABLE_HANDLER_CACHE.queryForDependencies({
        ctx,
        input,
      });
    }),
  // TODO: @Hariom should we move these elsewhere?
  checkForGWorkspace: authedProcedure.query(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.checkForGWorkspace) {
      UNSTABLE_HANDLER_CACHE.checkForGWorkspace = await import("./googleWorkspaceHandler.handler").then(
        (mod) => mod.checkForGWorkspace
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.checkForGWorkspace) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.checkForGWorkspace({
      ctx,
    });
  }),
  getUsersFromGorkspace: authedProcedure.mutation(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.getUsersFromGWorkspace) {
      UNSTABLE_HANDLER_CACHE.getUsersFromGWorkspace = await import("./googleWorkspaceHandler.handler").then(
        (mod) => mod.getUsersFromGWorkspace
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.getUsersFromGWorkspace) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.getUsersFromGWorkspace({
      ctx,
    });
  }),
  removeCurrentGoogleWorkspaceConnection: authedProcedure.mutation(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.removeCurrentGoogleWorkspaceConnection) {
      UNSTABLE_HANDLER_CACHE.removeCurrentGoogleWorkspaceConnection = await import(
        "./googleWorkspaceHandler.handler"
      ).then((mod) => mod.removeCurrentGoogleWorkspaceConnection);
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.removeCurrentGoogleWorkspaceConnection) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.removeCurrentGoogleWorkspaceConnection({
      ctx,
    });
  }),
});
