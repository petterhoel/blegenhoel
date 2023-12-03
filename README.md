# Blegenhoel.no

## Get started

```
npm run init
```

Start website (astro)

```
npm run dev:site
```

Start cms (sanity)

```
npm run dev:cms
```

## Programatisk kopiere et komplett datasett

Det finnes flere måter å gjøre dette på, men om man ønsker å kopiere alle assets (bilder, filer, etc), så er det ganske greit å bruke sanity sin cli (Opens in new window or tab) .

Typisk use case er å erstatte eksisternede test-datasett med prod-datasettet. Eksempel som kopierer production til test:

### kopier ønsket datasett til lokal fil
```shell
sanity dataset export production /Users/petter/production.tar.gz
```


### slett datasett som skal erstattes
```shell
sanity dataset delete test
```
### importer lokal kopi til ønsket datasett
```shell
sanity dataset import /Users/petter/production.tar.gz test
```
