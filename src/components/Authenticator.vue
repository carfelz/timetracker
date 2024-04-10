<template>
  <Authenticator>
    <slot></slot>
  </Authenticator>
</template>
<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { fetchUserAttributes } from "aws-amplify/auth";

import { Hub } from "aws-amplify/utils";
//@ts-ignore
import { useUserStore } from "@/store/userStore";

const { setUser, logOut } = useUserStore();

Hub.listen("auth", async ({ payload }) => {
  switch (payload.event) {
    case "signedIn":
      const data = await fetchUserAttributes();
      setUser({
        userId: data.sub,
        email: data.email,
        name: data["custom:name"],
        isAdmin: data["custom:isAdmin"],
      });
      break;
    case "signedOut":
    case "tokenRefresh_failure":
      logOut();
      break;
  }
});
</script>
