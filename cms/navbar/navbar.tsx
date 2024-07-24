import { RefreshIcon } from '@sanity/icons'
import { Button, Card, Inline, Stack, Text } from '@sanity/ui'
import React, { useEffect, useState } from 'react'

export const NavBarWithBundleChecker = (props: any) => {
  const [nyVersjon, setValue] = useState(false)
  const createInterval = () =>
    setInterval(async () => {
      const newHash = await getCurrentHash()

      if (hash && newHash !== hash) {
        clearInterval(interval)
        setValue(true)
      }
    }, 60 * 1000)
  async function getCurrentHash() {
    const html = await window.fetch('/').then((res) => res.text())
    const [, hash] = html.match(/static\/sanity-(\w+).js/) || []
    return hash
  }
  let hash: any = null
  let interval: any = null
  useEffect(() => {
    getCurrentHash().then((newHash) => {
      hash = newHash
    })

    interval = createInterval()

    return () => clearInterval(interval)
  }, [])

  return (
    <Stack>
      {nyVersjon && (
        <Card padding={3} tone="caution">
          <Inline space={4}>
            <Text> 🎉 Det er kommet en oppdatert versjon 🎉 </Text>
            <Button
              onClick={() => window.location.reload()}
              fontSize={[1, 1, 1]}
              icon={RefreshIcon}
              tone="caution"
              padding={[3, 33, 2]}
              radius="full"
              text="Last siden på nytt"
            />
          </Inline>
        </Card>
      )}
      {props.renderDefault(props)}
    </Stack>
  )
}
