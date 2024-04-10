<template>
  <Authenticator>
    <slot></slot>
  </Authenticator>
</template>
<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import { Hub } from "aws-amplify/utils";
//@ts-ignore
import { useUserStore } from "@/store/userStore";

const { setUser, logOut } = useUserStore();

Hub.listen("auth", ({ payload }) => {
  //@ts-ignore
  const { data } = payload;
  switch (payload.event) {
    case "signedIn":
      setUser({ userName: data.signInDetails.loginId, userId: data.userId });
      break;
    case "signedOut":
    case "tokenRefresh_failure":
      logOut();
      break;
  }
});
</script>
