import React from "react"
import { Button, useToast, Center, NativeBaseProvider } from "native-base"
export const Example = () => {
  const toast = useToast()
  return (
    <Button
      onPress={() =>
        {   
            var test = useToast()
            toast.show({
                description: "Hello world",
              })
        }
        
      }
    >
      Bottom
    </Button>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
