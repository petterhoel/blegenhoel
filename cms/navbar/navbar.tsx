import { RefreshIcon } from "@sanity/icons";
import { Button, Card, Inline, Stack, Text } from "@sanity/ui";

// Adds markup and invokes renderDefault()
export function NavBarWithBundleChecker(props: any) {
  return (
    <Stack>
      <Card padding={3}>
        <Inline space={4}>
          <Text> 🎉 Det er en ny versjon ute 🎉 </Text>
          <Button
            fontSize={[1, 1, 1]}
            icon={RefreshIcon}
            tone="caution"
            padding={[3, 33, 2]}
            radius="full"
            text="Last siden på nytt"
          />
        </Inline>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  );
}
