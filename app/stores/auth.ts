import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("authStore", () => {
  const session = authClient.useSession();

  const user = computed(() => session.value.data?.user);

  // TODO: This is causing hydration error for auth button. Take a look if doesn't get fixed in the future
  const loading = computed(
    () => session.value.isPending || session.value.isRefetching,
  );

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return {
    loading,
    signIn,
    signOut,
    user,
  };
});
