import { Link } from 'react-aria-components'
import { authUrl } from '@/features/auth'
import { cva } from '@/styled-system/css'
import { useTranslation } from 'react-i18next'
import { VStack } from '@/styled-system/jsx'
import { Text } from '@/primitives'

// Styles per their documentation https://github.com/numerique-gouv/agentconnect-documentation/blob/main/doc_fs/bouton_proconnect.md
const proConnectButtonRecipe = cva({
  base: {
    backgroundColor: 'transparent !important',
    backgroundImage:
      "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMTEnIGhlaWdodD0nNTgnIGZpbGw9J25vbmUnPjxwYXRoIGZpbGw9JyMwMDAwOTEnIGQ9J00wIDBoMjExdjU4SDB6Jy8+PHBhdGggZmlsbD0nI2ZmZicgZD0nbTY5Ljk4NiAyNi4zNjggMS4xNTYtMS4wNzFjLjgzMyAxLjA1NCAxLjgxOSAxLjU5OCAyLjk0MSAxLjU5OCAxLjI5MiAwIDIuMDQtLjgxNiAyLjA0LTEuOTA0IDAtMi41NS01LjYyNy0yLjI0NC01LjYyNy02LjAzNSAwLTEuNzM0IDEuNDI4LTMuMTk2IDMuNDUxLTMuMTk2IDEuNjgzIDAgMi45MDcuNzY1IDMuNzkxIDEuOTM4bC0xLjE5IDEuMDM3Yy0uNjk3LTEuMDAzLTEuNTQ3LTEuNTQ3LTIuNTg0LTEuNTQ3LTEuMTA1IDAtMS44MzYuNzQ4LTEuODM2IDEuNzM0IDAgMi41NjcgNS42MjcgMi4yNDQgNS42MjcgNi4wNTIgMCAyLjAyMy0xLjU4MSAzLjM0OS0zLjY1NSAzLjM0OS0xLjc2OCAwLTMuMDc3LS42NjMtNC4xMTQtMS45NTVabTEwLjgxNy01LjcxMkg3OS40NmwxLjQ0NS00LjU1NmgxLjY0OWwtMS43NTEgNC41NTZabTQuODE4LTMuNDUxYy0uNTYgMC0xLjAyLS40NTktMS4wMi0xLjAyYTEuMDIgMS4wMiAwIDAgMSAxLjAyLTEuMDAzYy41NjEgMCAxLjAwMy40NTkgMS4wMDMgMS4wMDMgMCAuNTYxLS40NDIgMS4wMi0xLjAwMyAxLjAyWk04NC44OTEgMjh2LTguNTY4aDEuNDQ0VjI4SDg0Ljg5Wm0zLjc2Ny00LjI4NGMwLTIuNDk5IDEuNzE3LTQuNjI0IDQuNDAzLTQuNjI0IDEuMjQxIDAgMi4yNjEuNDU5IDMuMDQzIDEuMjkyVjE1LjI1aDEuNDQ1VjI4aC0xLjQ0NXYtLjk1MmMtLjc4Mi44MzMtMS44MDIgMS4yOTItMy4wNDMgMS4yOTItMi42ODYgMC00LjQwMy0yLjEyNS00LjQwMy00LjYyNFptMS41MyAwYzAgMS44MTkgMS4yMjQgMy4yNjQgMy4wNDMgMy4yNjQgMS4xOSAwIDIuMjEtLjU3OCAyLjg3My0xLjU5OFYyMi4wNWMtLjY4LTEuMDM3LTEuNy0xLjU5OC0yLjg3My0xLjU5OC0xLjgxOSAwLTMuMDQzIDEuNDQ1LTMuMDQzIDMuMjY0Wm0xOC4wMjMgMi44NzNjLS43OTkgMS4wNzEtMi4wNzQgMS43NTEtMy42NzIgMS43NTEtMi44OSAwLTQuNjc1LTIuMTI1LTQuNjc1LTQuNjI0IDAtMi42MDEgMS42NjYtNC42MjQgNC4zMTgtNC42MjQgMi4zMjkgMCAzLjg0MiAxLjU4MSAzLjg0MiAzLjcyMyAwIC4zNC0uMDUxLjY4LS4xMDIuOTE4aC02LjU2MnYuMDM0YzAgMS44ODcgMS4yOTIgMy4yNjQgMy4yMTMgMy4yNjQgMS4wODggMCAyLjAwNi0uNTEgMi41NjctMS4yNzVsMS4wNzEuODMzWm0tNC4wMTItNi4yNTZjLTEuMzk0IDAtMi4zOC43ODItMi43MiAyLjI2MWg1LjA4M2MtLjA1MS0xLjI0MS0uOTUyLTIuMjYxLTIuMzYzLTIuMjYxWk0xMTAuNDczIDI4di04LjU2OGgxLjQ0NXYuOTY5Yy42OTctLjc2NSAxLjU4MS0xLjMwOSAyLjg1Ni0xLjMwOSAxLjkyMSAwIDMuMzQ5IDEuMjkyIDMuMzQ5IDMuNzIzVjI4aC0xLjQ2MnYtNS4xMzRjMC0xLjUzLS44NS0yLjQxNC0yLjE3Ni0yLjQxNC0xLjI0MSAwLTIuMDIzLjcxNC0yLjU2NyAxLjYxNVYyOGgtMS40NDVabTExLjA1Mi0yLjg3M3YtNC4zNjloLTEuNjE1di0xLjMyNmgxLjYxNVYxNy4yOWgxLjQ2MnYyLjE0MmgyLjk3NXYxLjMyNmgtMi45NzV2NC4zNjljMCAxLjM0My42OCAxLjcxNyAxLjcxNyAxLjcxNy41NjEgMCAuOTUyLS4wNjggMS4yNzUtLjIwNHYxLjI5MmMtLjQwOC4xNy0uODY3LjIzOC0xLjQ3OS4yMzgtMS45MDQgMC0yLjk3NS0uOTUyLTIuOTc1LTMuMDQzWm03LjM3Ny03LjkyMmMtLjU2MSAwLTEuMDItLjQ1OS0xLjAyLTEuMDJhMS4wMiAxLjAyIDAgMCAxIDEuMDItMS4wMDNjLjU2MSAwIDEuMDAzLjQ1OSAxLjAwMyAxLjAwMyAwIC41NjEtLjQ0MiAxLjAyLTEuMDAzIDEuMDJaTTEyOC4xNzEgMjh2LTguNTY4aDEuNDQ1VjI4aC0xLjQ0NVptMy4zNzctOC41NjhoMS42MTV2LTEuMDU0YzAtMS44MzYgMS4yMDctMy4xMjggMy4wNDMtMy4xMjguOTUyIDAgMS43LjM0IDIuMjEuODMzbC0uOTAxIDEuMDU0YTEuNjMzIDEuNjMzIDAgMCAwLTEuMjkyLS41NzhjLS45MzUgMC0xLjU5OC42OC0xLjU5OCAxLjc4NXYxLjA4OGgyLjk3NXYxLjMyNmgtMi45NzVWMjhoLTEuNDYydi03LjI0MmgtMS42MTV2LTEuMzI2Wm04LjU0My0yLjIyN2MtLjU2MSAwLTEuMDItLjQ1OS0xLjAyLTEuMDJhMS4wMiAxLjAyIDAgMCAxIDEuMDItMS4wMDNjLjU2MSAwIDEuMDAzLjQ1OSAxLjAwMyAxLjAwMyAwIC41NjEtLjQ0MiAxLjAyLTEuMDAzIDEuMDJaTTEzOS4zNiAyOHYtOC41NjhoMS40NDVWMjhoLTEuNDQ1Wm0xMi4xMTUtMS40MTFjLS43OTkgMS4wNzEtMi4wNzQgMS43NTEtMy42NzIgMS43NTEtMi44OSAwLTQuNjc1LTIuMTI1LTQuNjc1LTQuNjI0IDAtMi42MDEgMS42NjYtNC42MjQgNC4zMTgtNC42MjQgMi4zMjkgMCAzLjg0MiAxLjU4MSAzLjg0MiAzLjcyMyAwIC4zNC0uMDUxLjY4LS4xMDIuOTE4aC02LjU2MnYuMDM0YzAgMS44ODcgMS4yOTIgMy4yNjQgMy4yMTMgMy4yNjQgMS4wODggMCAyLjAwNi0uNTEgMi41NjctMS4yNzVsMS4wNzEuODMzWm0tNC4wMTItNi4yNTZjLTEuMzk0IDAtMi4zOC43ODItMi43MiAyLjI2MWg1LjA4M2MtLjA1MS0xLjI0MS0uOTUyLTIuMjYxLTIuMzYzLTIuMjYxWk0xNTMuNzM3IDI4di04LjU2OGgxLjQ0NXYxLjA3MWMuNjI5LS43NDggMS40MTEtMS4yNDEgMi40OTktMS4yNDEuMjcyIDAgLjUyNy4wMzQuNzMxLjEwMnYxLjQ5NmEzLjEwNSAzLjEwNSAwIDAgMC0uODUtLjExOWMtMS4xMjIgMC0xLjg1My41NzgtMi4zOCAxLjQ0NVYyOGgtMS40NDVabTEzLjY4NS4zNGMtMS42ODMgMC0yLjgyMi0uOTUyLTIuODIyLTIuNDQ4IDAtMS4zMjYuOTg2LTIuMjc4IDIuODIyLTIuNTY3bDIuODczLS40NzZ2LS41OTVjMC0xLjE5LS44NS0xLjg3LTIuMDU3LTEuODctMS4wMDMgMC0xLjgzNi40NDItMi4zMjkgMS4xOWwtMS4wODgtLjgzM2MuNzQ4LTEuMDIgMS45NTUtMS42NDkgMy40NTEtMS42NDkgMi4xNzYgMCAzLjQ2OCAxLjI3NSAzLjQ2OCAzLjE2MlYyOGgtMS40NDV2LTEuMDg4Yy0uNjQ2LjkwMS0xLjcxNyAxLjQyOC0yLjg3MyAxLjQyOFptLTEuMzc3LTIuNDk5YzAgLjczMS42MjkgMS4yOTIgMS42MTUgMS4yOTIgMS4xMzkgMCAyLjA0LS41OTUgMi42MzUtMS41ODFWMjMuOTJsLTIuNTMzLjQ0MmMtMS4xOS4xODctMS43MTcuNzMxLTEuNzE3IDEuNDc5Wm03LjI1Mi02LjQwOWgxLjU2NGwyLjczNyA3LjA1NSAyLjczNy03LjA1NWgxLjU2NEwxNzguNTUgMjhoLTEuOTA0bC0zLjM0OS04LjU2OFptMTcuODU2IDcuMTU3Yy0uNzk5IDEuMDcxLTIuMDc0IDEuNzUxLTMuNjcyIDEuNzUxLTIuODkgMC00LjY3NS0yLjEyNS00LjY3NS00LjYyNCAwLTIuNjAxIDEuNjY2LTQuNjI0IDQuMzE4LTQuNjI0IDIuMzI5IDAgMy44NDIgMS41ODEgMy44NDIgMy43MjMgMCAuMzQtLjA1MS42OC0uMTAyLjkxOGgtNi41NjJ2LjAzNGMwIDEuODg3IDEuMjkyIDMuMjY0IDMuMjEzIDMuMjY0IDEuMDg4IDAgMi4wMDYtLjUxIDIuNTY3LTEuMjc1bDEuMDcxLjgzM1ptLTQuMDEyLTYuMjU2Yy0xLjM5NCAwLTIuMzguNzgyLTIuNzIgMi4yNjFoNS4wODNjLS4wNTEtMS4yNDEtLjk1Mi0yLjI2MS0yLjM2My0yLjI2MVptMTAuMTg1IDYuNjQ3YzEuMDU0IDAgMS45MDQtLjUxIDIuNDMxLTEuMjc1bDEuMTU2Ljg4NGMtLjc5OSAxLjA3MS0yLjA0IDEuNzUxLTMuNjA0IDEuNzUxLTIuODM5IDAtNC42NTgtMi4xMjUtNC42NTgtNC42MjQgMC0yLjQ5OSAxLjgxOS00LjYyNCA0LjY1OC00LjYyNCAxLjU0NyAwIDIuODA1LjY5NyAzLjYwNCAxLjc1MWwtMS4xNTYuODg0YTIuOTI1IDIuOTI1IDAgMCAwLTIuNDQ4LTEuMjc1Yy0xLjgzNiAwLTMuMTQ1IDEuNDQ1LTMuMTQ1IDMuMjY0IDAgMS44MzYgMS4zMDkgMy4yNjQgMy4xNjIgMy4yNjRaTTcwLjg1NCA0NVYzMi40aDQuMTU4YzIuNzcyIDAgNC40NjQgMS40MjIgNC40NjQgMy43NjIgMCAyLjMyMi0xLjY5MiAzLjc0NC00LjQ2NCAzLjc0NEg3My40MVY0NWgtMi41NTZabTQuMjY2LTEwLjQyMmgtMS43MXYzLjE1aDEuNzFjMS4wOCAwIDEuNzI4LS41NzYgMS43MjgtMS42MDIgMC0uOTU0LS42NDgtMS41NDgtMS43MjgtMS41NDhaTTgxLjI0OSA0NXYtOS4wNzJoMi4yODZ2LjljLjU5NC0uNjEyIDEuMzY4LTEuMDggMi4zOTQtMS4wOC4zMDYgMCAuNTc2LjA1NC43OTIuMTI2djIuMzk0YTMuOTM4IDMuOTM4IDAgMCAwLTEuMDA4LS4xMjZjLTEuMTE2IDAtMS44MzYuNjEyLTIuMTc4IDEuMTdWNDVoLTIuMjg2Wm0xMS4zODYtOS40MzJjMi45NTIgMCA0Ljk2OCAyLjE3OCA0Ljk2OCA0Ljg5NnMtMi4wMTYgNC44OTYtNC45NjggNC44OTYtNC45NjgtMi4xNzgtNC45NjgtNC44OTYgMi4wMTYtNC44OTYgNC45NjgtNC44OTZabS4wMzYgNy42MzJjMS40NTggMCAyLjU1Ni0xLjE3IDIuNTU2LTIuNzM2IDAtMS41ODQtMS4wOTgtMi43MzYtMi41NTYtMi43MzYtMS41MTIgMC0yLjYyOCAxLjE1Mi0yLjYyOCAyLjczNiAwIDEuNTg0IDEuMTE2IDIuNzM2IDIuNjI4IDIuNzM2Wm0xMy4xNzItLjIzNGMxLjQ0IDAgMi41NzQtLjcwMiAzLjI5NC0xLjcyOGwyLjAxNiAxLjU0OGMtMS4xNTIgMS41NjYtMy4wMjQgMi41NzQtNS4zMSAyLjU3NC0zLjk3OCAwLTYuNjk2LTMuMDYtNi42OTYtNi42NnMyLjcxOC02LjY2IDYuNjk2LTYuNjZjMi4yODYgMCA0LjE1OCAxLjAyNiA1LjMxIDIuNTU2bC0yLjAxNiAxLjU2NmMtLjcyLTEuMDI2LTEuODU0LTEuNzI4LTMuMjk0LTEuNzI4LTIuMzc2IDAtNC4wNjggMS44NTQtNC4wNjggNC4yNjZzMS42OTIgNC4yNjYgNC4wNjggNC4yNjZabTExLjM2Ni03LjM5OGMyLjk1MiAwIDQuOTY4IDIuMTc4IDQuOTY4IDQuODk2cy0yLjAxNiA0Ljg5Ni00Ljk2OCA0Ljg5Ni00Ljk2OC0yLjE3OC00Ljk2OC00Ljg5NiAyLjAxNi00Ljg5NiA0Ljk2OC00Ljg5NlptLjAzNiA3LjYzMmMxLjQ1OCAwIDIuNTU2LTEuMTcgMi41NTYtMi43MzYgMC0xLjU4NC0xLjA5OC0yLjczNi0yLjU1Ni0yLjczNi0xLjUxMiAwLTIuNjI4IDEuMTUyLTIuNjI4IDIuNzM2IDAgMS41ODQgMS4xMTYgMi43MzYgMi42MjggMi43MzZabTcuMDE4IDEuOHYtOS4wNzJoMi4yODZ2LjcyYy42My0uNjEyIDEuNDc2LTEuMDggMi42ODItMS4wOCAxLjk2MiAwIDMuNTI4IDEuMzUgMy41MjggNC4wMzJWNDVoLTIuMzIydi01LjMxYzAtMS4yMDYtLjY2Ni0xLjk2Mi0xLjc4Mi0xLjk2Mi0xLjE1MiAwLTEuNzY0Ljc3NC0yLjEwNiAxLjM1VjQ1aC0yLjI4NlptMTEuMDkxIDB2LTkuMDcyaDIuMjg2di43MmMuNjMtLjYxMiAxLjQ3Ni0xLjA4IDIuNjgyLTEuMDggMS45NjIgMCAzLjUyOCAxLjM1IDMuNTI4IDQuMDMyVjQ1aC0yLjMyMnYtNS4zMWMwLTEuMjA2LS42NjYtMS45NjItMS43ODItMS45NjItMS4xNTIgMC0xLjc2NC43NzQtMi4xMDYgMS4zNVY0NWgtMi4yODZabTE5LjQ0NC0xLjQ3NmMtLjg0NiAxLjEzNC0yLjI1IDEuODM2LTMuOTYgMS44MzYtMy4yMjIgMC01LjA0LTIuMjUtNS4wNC00Ljg5NiAwLTIuNjgyIDEuNjkyLTQuODk2IDQuNjYyLTQuODk2IDIuNTIgMCA0LjE3NiAxLjY5MiA0LjE3NiA0LjA2OCAwIC41MDQtLjA3Mi45OS0uMTQ0IDEuMjk2aC02LjM1NGMuMTQ0IDEuNDk0IDEuMTg4IDIuMzc2IDIuNzM2IDIuMzc2Ljk5IDAgMS44LS40MzIgMi4yODYtMS4wOGwxLjYzOCAxLjI5NlptLTQuMzM4LTYuMDQ4Yy0xLjExNiAwLTEuODcyLjU0LTIuMTc4IDEuNzI4aDQuMDg2Yy0uMDM2LS45LS43MDItMS43MjgtMS45MDgtMS43MjhabTEwLjY5NiA1LjcyNGMuODgyIDAgMS41ODQtLjQzMiAyLjAxNi0xLjA2MmwxLjgxOCAxLjM4NmMtLjg0NiAxLjExNi0yLjE3OCAxLjgzNi0zLjgzNCAxLjgzNi0zLjEzMiAwLTUuMDA0LTIuMjUtNS4wMDQtNC44OTZzMS44NzItNC44OTYgNS4wMDQtNC44OTZjMS42NTYgMCAyLjk4OC43MiAzLjgzNCAxLjgzNmwtMS44MTggMS4zODZjLS40MzItLjYzLTEuMTE2LTEuMDYyLTIuMDUyLTEuMDYyLTEuNDk0IDAtMi41OTIgMS4xNTItMi41OTIgMi43MzYgMCAxLjYwMiAxLjA5OCAyLjczNiAyLjYyOCAyLjczNlptNi4yMDQtMS41MTJ2LTMuNjcyaC0xLjY5MnYtMi4wODhoMS42OTJWMzMuNjZoMi4zMDR2Mi4yNjhoMi43NzJ2Mi4wODhoLTIuNzcydjMuNjcyYzAgMS4wMDguNTQgMS40MDQgMS40NCAxLjQwNC42MyAwIDEuMDQ0LS4wNzIgMS4zNS0uMTk4djEuOTk4Yy0uNDUuMTk4LS45OS4yODgtMS43NDYuMjg4LTIuMjY4IDAtMy4zNDgtMS4yNzgtMy4zNDgtMy40OTJaJy8+PHBhdGggZmlsbD0nIzAwMDA5MScgZD0nTTQ2Ljk5MiAxOS4wOTggMzEuOTk4IDEwLjQybC0xNC45OTQgOC43NmEuNjA2LjYwNiAwIDAgMC0uMzA2LjUyNXYxNi45NDhhLjY2Ni42NjYgMCAwIDAgLjMwNi41MjRsMTQuOTkyIDguNiAxNC45OTQtOC43MDZhLjY2Ni42NjYgMCAwIDAgLjMwNi0uNTI0VjE5LjYyNmEuNjA0LjYwNCAwIDAgMC0uMzA0LS41MjhaJy8+PHBhdGggZmlsbD0nI0ZDQzYzQScgZD0nbTI2LjY0MSAxOS41OTgtNS4wMjkgOC42MjgtNC41NTctOS4xNzUgNS4zOS0zLjExMyA0LjQ4OSAzLjE2LS4yOTMuNVptMjAuNjU2IDE2Ljk4VjE5LjYyYS42LjYgMCAwIDAtLjMwNi0uNTIzTDMxLjk5OCAxMC40MicvPjxwYXRoIGZpbGw9JyMwMDYzQ0InIGQ9J00xNi43IDM2LjU3OCAzMiAxMC40MnYzNS4zNjJsLTE0Ljk5Ni04LjYwNWEuNjY1LjY2NSAwIDAgMS0uMzA2LS41MjRWMTkuNzA2bC4wMDIgMTYuODcyWm0yNC42NjktMjAuNzM1IDUuNDU4IDMuMTU1LTQuNDg5IDkuMTUtNS4zODctOS4yMzYgNC40MTgtMy4wN1onLz48cGF0aCBmaWxsPScjZmZmJyBkPSdtNTEuNjA2IDE2LjMwMy0xOS4xOS0xMS4wMmEuOTMzLjkzMyAwIDAgMC0uODMyIDBsLTE5LjE5IDExLjAyYS44ODcuODg3IDAgMCAwLS4zOTQuNjk1djIyYS44ODUuODg1IDAgMCAwIC4zOTQuN2wxOS4xODkgMTEuMDJhLjkzMi45MzIgMCAwIDAgLjgzMiAwbDE5LjE5MS0xMS4wMmEuODg2Ljg4NiAwIDAgMCAuMzk0LS43di0yMmEuODg3Ljg4NyAwIDAgMC0uMzk0LS42OTVaTTIyLjc4OSAzNC4wNTloLjA3OWMtLjA0MiAwLS4wNzkuMDA3LS4wNzkuMDUgMCAuMS4xNTEgMCAuMi4xYS45MTIuOTEyIDAgMCAwLS42MjkuMjc2YzAgLjA1LjEuMDUuMTUxLjA1LS4wNzUuMS0uMjI2LjA1LS4yNzcuMTUyYS4xNzYuMTc2IDAgMCAwIC4xLjA1Yy0uMDUgMC0uMSAwLS4xLjA1di4xNTJjLS4xMjYgMC0uMTc2LjEtLjI3Ny4xNS4yLjE1Mi4zMjcgMCAuNTI4IDAtLjUyOC4yLS45NTYuNDc5LTEuNDg0LjYzLS4xIDAgMCAuMTUtLjEuMTUuMTUxLjEuMjI3LS4wNS4zNzctLjA1LS42NTQuMzc4LTEuMzMzLjctMi4wMzcgMS4xMzNhLjM1MS4zNTEgMCAwIDAtLjEuMmgtLjJjLS4xLjA1LS4wNS4xNzYtLjE1MS4yNzcuMjI2LjE1LjUtLjIuNjU0IDAgLjA1IDAtLjEuMDUtLjIuMDUtLjA1IDAtLjA1LjEtLjEuMWgtLjE1NGMtLjEuMDc1LS4yLjEyNi0uMi4yNzZhLjIyLjIyIDAgMCAwLS4yMjYuMSA5LjAzMSA5LjAzMSAwIDAgMCAzLjE0NC0uNTc4IDcuNjgzIDcuNjgzIDAgMCAwIDIuMDg4LTEuNTYuMTc2LjE3NiAwIDAgMSAuMDUuMWMtLjE0Ny40MzctLjQzLjgxNi0uODA2IDEuMDgtLjI3Ny4xNTItLjQ3OC4zNzgtLjcuNDc5YTQuMDU3IDQuMDU3IDAgMCAwLS40MjguMjc2Yy0uNjMyLjE5Ny0xLjI4MS4zMzUtMS45MzkuNDEybC0uMzA1LjA0NGMtLjIyNS4wMzMtLjQ0OS4wNjktLjY3MS4xMDhsLTEuOTkzLTEuMTM4YS42NDcuNjQ3IDAgMCAxLS4yODgtLjQxMS41Ny41NyAwIDAgMCAuMDk0LS4wNjMuMjY2LjI2NiAwIDAgMC0uMTEzLS4wNzF2LS42NWExMi43ODIgMTIuNzgyIDAgMCAwIDMuMDM4LS45NDIgOC43NDYgOC43NDYgMCAwIDAtMy4wMzctMS4zNDN2LTEuNTE1YTExLjY3IDExLjY3IDAgMCAxIDEuNjM5LjM5MiA2LjQyIDYuNDIgMCAwIDEgMS4xODIuNTc4Yy4xNDcuMTQuMzA3LjI2Ny40NzguMzc3YS45MS45MSAwIDAgMCAuOC4wNWguMzNhMy45NjEgMy45NjEgMCAwIDAgMS45MzctLjkwNWMwIC4wNS4wNS4wNS4xLjA1YTMuNjI5IDMuNjI5IDAgMCAxLS40MjggMS4xMzJjLjAwMy4wNS0uMDQ4LjE1Mi4wNTMuMjAyWm0yLjgxNyAzLjU3Yy4yNTEtLjEuNC0uMjc2LjYyOS0uMzc2LS4wNS4wNS0uMDUuMTUtLjEuMmEzLjY5OSAzLjY5OSAwIDAgMC0uNTI4LjQgMTUuOTY1IDE1Ljk2NSAwIDAgMC0xLjU4NSAxLjYxYy0uMjUyLjMtLjUyOC41NzgtLjguODU1LS4wOTYuMDktLjIuMTcyLS4zMS4yNDVsLTIuNTI3LTEuNDVjLjM2LjAzLjcyMS4wMTMgMS4wNzYtLjA1My4yOTQtLjA4My41OC0uMTkyLjg1NS0uMzI3di4xYy43LS4yNzcgMS4yMzItLjkwNiAxLjkzNy0xLjEzMi4wMjUgMCAuMTI2LjEuMjI2LjA1YTEuODgzIDEuODgzIDAgMCAxIDEuNTA5LS43YzAgLjA1IDAgLjEuMDUuMWguMDI1Yy0uMTUxLjEyNi0uMzI3LjI1LS41LjM3Ny0uMDU3LjA1Mi0uMDA3LjEwMi4wNDMuMTAyWm0tOC45MDgtNi4xNjN2LS4xODZhNS44MTcgNS44MTcgMCAwIDEgMS41ODgtLjE4OCAxLjUyIDEuNTIgMCAwIDEgLjQ3OCAwIDUuODYgNS44NiAwIDAgMC0yLjA2Ni4zNzRabTMwLjYgNS4wODhhLjY2NS42NjUgMCAwIDEtLjMwNi41MjRsLTEwLjA3OSA1Ljg1YTMyLjI5NiAzMi4yOTYgMCAwIDEtMy40MDgtMS4xODQgMi44MjYgMi44MjYgMCAwIDEtLjA1LTIuMjQ1Yy4wOC0uMzA4LjE5OC0uNjA1LjM1Mi0uODgzLjAyNS0uMDI1LjA1LS4wNS4wNS0uMDc2YS4wMjUuMDI1IDAgMCAwIC4wMjUtLjAyNSA0LjMyIDQuMzIgMCAwIDEgLjM3Ny0uNTU1bC4wMTUtLjAxNS4wMi0uMDIxLjAxNS0uMDE1YzAtLjAyNS4wMjUtLjA1LjA1LS4wNzYuMDI1LS4wNTEuMDc1LS4wNzYuMS0uMTI2LjE3Ni0uMTg2LjM3LS4zNTQuNTc5LS41LjIxMy0uMDc3LjQzMS0uMTM2LjY1NC0uMTc3LjgxMS4wNiAxLjYxNy4xNyAyLjQxNS4zMjhhLjc1Mi43NTIgMCAwIDEgLjI3Ny4xYy4zMDEuMDU5LjYxMi4wNDEuOTA1LS4wNWExLjEzNyAxLjEzNyAwIDAgMCAuODU1LS43MDYgMS4yMTIgMS4yMTIgMCAwIDAgLjA1LTEuMDZjLS4xNzgtLjI3NS0uMDEzLS40MzYuMTgxLS41OWwuMDY4LS4wNTRjLjA4Ni0uMDYxLjE2NC0uMTM0LjIzMS0uMjE2LjEyNi0uMjUyLS4xLS40LS4xNTEtLjYzLS4wNS0uMS0uMjI2LS4wNS0uMzI3LS4yLjM1Mi0uMTUxLjg1NS0uNDMuNjI5LS44NTctLjE1MS0uMjI3LS4zNzctLjYzLS4xLS44NTcuMzUyLS4yLjg1NS0uMTUxIDEuMDA2LS40OGExLjEzNyAxLjEzNyAwIDAgMC0uMjkyLTEuMDg0bC0uMDc1LS4xMDhhNC43NTQgNC43NTQgMCAwIDEtLjIxMS0uMzIgNi45MDUgNi45MDUgMCAwIDAtLjUyOC0uNzU3IDQuMjk3IDQuMjk3IDAgMCAxLS41MjgtMS4wMWMtLjE1MS0uMzc3LjA1LS43MDUuMDUtMS4wODNhNi4zNDcgNi4zNDcgMCAwIDAtLjMyNy0yLjE0NGMtLjEyNi0uMzUzLS4xNzYtLjczMS0uMzI3LTEuMDZhMS4xMiAxLjEyIDAgMCAwLS4yMjYtLjU4LjM3NC4zNzQgMCAwIDEgMC0uMzI3Yy4yMDUtLjE0NS4zOTktLjMwNS41NzktLjQ4YS41NjcuNTY3IDAgMCAwLS4yLS43MDVjLS4zMjctLjE1MS0uMy4zMjgtLjUyOC40MjloLS4xNTFjLS4wNS0uMTI2LjA1LS4xNzcuMTUxLS4yNzcgMC0uMDUgMC0uMTUxLS4wNS0uMTUxLS4yIDAtLjM3Ny0uMDUxLS40MjgtLjE1MWEzLjk1NyAzLjk1NyAwIDAgMC0xLjg2MS0xLjI4NmMuMTg4LjA1OC4zODIuMDkxLjU3OS4xLjMzOC4wNzEuNjkuMDM2IDEuMDA2LS4xLjIyNy0uMDc2LjI3Ny0uNDguMzc3LS43MDZhLjguOCAwIDAgMC0uMTUxLS42MzEgMi4xOSAyLjE5IDAgMCAwLS45MDYtLjc1NiA5LjEzIDkuMTMgMCAwIDEtLjY3OS0uMzUzLjk1Ni45NTYgMCAwIDAtLjI1MS0uMTI2Yy0yLjk2NS0xLjQ4NS05LjA2OS0uMi05LjUzNCAwaC0uMDA5YTguMjU0IDguMjU0IDAgMCAwLTEuMjQ5LjQ3NSAzLjkyMiAzLjkyMiAwIDAgMC0yLjM2NSAyLjQ2NSAzLjgzIDMuODMgMCAwIDAtMS4zMzMgMS41MDljLS40MjguOC0xLjA1NiAxLjUwOS0uOTU2IDIuNDE0LjEuNzguMjc3IDEuNDg0LjQyOCAyLjI4OS4wNDMuMjcyLjExLjU0LjIuOC4xLjI3NiAwIC42MjkuMTUxLjg1NS4wNzUuMTUuMDI1LjMyNy4yMjcuNDI4di4yYy4wNS4wNS4wNS4xLjE1MS4xdi4yYy40MzUuNDIzLjgwNy45MDYgMS4xMDcgMS40MzQuMS4yNzYtLjQ3OC4xNS0uNy4wNWE1Ljk3NyA1Ljk3NyAwIDAgMS0xLjEzMi0uOTU2LjE3Ni4xNzYgMCAwIDAtLjA1MS4xYy4yLjM1Mi45MDYuNzguNTI4IDEuMDA2LS4yLjEtLjQyOC0uMTUxLS42MjkuMDUtLjA1LjA3NiAwIC4xNzcgMCAuMjc3LS4yNzctLjItLjU3OC0uMS0uODU1LS4yLS4yLS4wNS0uMjUyLS40MjctLjQ3OC0uNDI3YTE1LjE5MSAxNS4xOTEgMCAwIDAtMS44MTEtLjMyNyAxNS4xNDQgMTUuMTQ0IDAgMCAwLTEuNzM5LS4xNlYxOS43MDdhLjYwNi42MDYgMCAwIDEgLjMwNi0uNTI0bDE0Ljk4Ny04Ljc2MSAxNC45OTQgOC42NzdhLjYwNS42MDUgMCAwIDEgLjMwNi41MjR2MTYuOTMyWm0tNy45NTQtOC4yNjFhLjMyNS4zMjUgMCAwIDEtLjI4Mi4xNDkgMi44NCAyLjg0IDAgMCAwLS4yODIuMjczYy4xIDAgMCAuMTQ5LjEuMTQ5LS4yMDUuMjIzLjA3Ny42OTQtLjIwNS43OTMtLjM3LjA5OS0uNzU4LjA5OS0xLjEyNyAwYS43MjcuNzI3IDAgMCAxIC4xNjctLjAxNmguMDg1YS4zODIuMzgyIDAgMCAwIC4zMzctLjEzMnYtLjJjMC0uMDUtLjA1MS0uMDUtLjEtLjA1YS4xNi4xNiAwIDAgMS0uMS4wNS4yMjMuMjIzIDAgMCAwLS4xNTQtLjIuODA2LjgwNiAwIDAgMS0uNzE4LS4yNzMuNjcuNjcgMCAwIDEgLjQzNi0uMDVjLjEyOCAwIC4wNzctLjIyMy4yMzEtLjMyMmguMTU0Yy4zMDctLjM3Mi44NzEtLjQ3MS45NzQtLjg0MyAwLS4xLS4yODItLjEtLjQ4Ny0uMTVhMi4yNiAyLjI2IDAgMCAwLS44Mi4wNWMtLjM2LjA1LS43MTIuMTQyLTEuMDUxLjI3NC4yOC0uMjA2LjU5Mi0uMzY1LjkyMy0uNDcxLjIzMi0uMDkuNDczLS4xNTcuNzE4LS4ybC4xMzItLjAyNi4xMzMtLjAyN2EuOTcuOTcgMCAwIDEgLjU1NiAwYy4yMzEuMS42MTUuMS42NjYuMjQ4LjEuMjczLS4xNTQuNTQ1LS40MzUuNzQ0LS4wNTcuMDguMTQ5LjEzNS4xNDkuMjNaJy8+PHJlY3Qgd2lkdGg9JzI5LjU2JyBoZWlnaHQ9JzEzLjMwMicgeD0nMzcnIHk9JzUnIGZpbGw9JyNGQ0M2M0EnIHJ4PScyJy8+PHBhdGggZmlsbD0nIzE2MTYxNicgZD0nTTM5LjU2MiAxNi4xNjhWNy4zMTZoMi45MjFjLjk3IDAgMS43MzIuMjM2IDIuMjg5LjcwOC41NjUuNDcyLjg0NyAxLjExNy44NDcgMS45MzUgMCAuODEtLjI4MiAxLjQ1LS44NDcgMS45MjItLjU1Ny40NzItMS4zMi43MDgtMi4yODkuNzA4aC0xLjEyNXYzLjU3OWgtMS43OTZabTIuOTk3LTcuMzIyaC0xLjIwMXYyLjIxM2gxLjJjLjM4IDAgLjY3NS0uMDk3Ljg4Ni0uMjkuMjItLjE5NS4zMjktLjQ3My4zMjktLjgzNiAwLS4zMzctLjExLS42MDItLjMyOS0uNzk2LS4yMS0uMTk0LS41MDYtLjI5MS0uODg1LS4yOTFaTTQ3LjIzIDE2LjE2OFY3LjMxNmgyLjcwN2MuOTcgMCAxLjczNi4yMzYgMi4zMDEuNzA4LjU2NS40NzIuODQ3IDEuMTE3Ljg0NyAxLjkzNSAwIC41My0uMTI2Ljk5NS0uMzc5IDEuMzktLjI0NC4zODktLjU5LjY4OC0xLjAzNy44OTlsMi43ODIgMy45MmgtMi4xNWwtMi4zNTItMy41NzloLS45MjN2My41NzloLTEuNzk1Wm0yLjgwOC03LjMyMmgtMS4wMTJ2Mi4yMTNoMS4wMTJjLjM4IDAgLjY3NC0uMDk3Ljg4NS0uMjkuMjEtLjE5NS4zMTYtLjQ3My4zMTYtLjgzNiAwLS4zMzctLjEwNS0uNjAyLS4zMTYtLjc5Ni0uMjEtLjE5NC0uNTA2LS4yOTEtLjg4NS0uMjkxWk01OS41NDkgNy4wNjNjLjY5IDAgMS4zMjMuMTI2IDEuODk2LjM4LjU4Mi4yNTIgMS4wOC41OSAxLjQ5MiAxLjAxMS40MTQuNDIxLjczNC45MTkuOTYyIDEuNDkyLjIyNy41NjUuMzQxIDEuMTY0LjM0MSAxLjc5NiAwIC42MzItLjExNCAxLjIzNS0uMzQxIDEuODA4YTQuNDg1IDQuNDg1IDAgMCAxLS45NjIgMS40OGMtLjQxMy40MjEtLjkxLjc1OC0xLjQ5MiAxLjAxMWE0LjY0OCA0LjY0OCAwIDAgMS0xLjg5Ni4zOCA0LjczOCA0LjczOCAwIDAgMS0zLjQwMi0xLjM5MSA0LjQ4NCA0LjQ4NCAwIDAgMS0uOTYxLTEuNDggNC44NTUgNC44NTUgMCAwIDEtLjM0Mi0xLjgwOGMwLS42MzMuMTE0LTEuMjMxLjM0Mi0xLjc5Ni4yMjctLjU3My41NDgtMS4wNy45NjEtMS40OTIuNDEzLS40MjIuOTEtLjc1OSAxLjQ5Mi0xLjAxMmE0LjczNyA0LjczNyAwIDAgMSAxLjkxLS4zNzlabTAgNy42NzZhMi44IDIuOCAwIDAgMCAxLjEzOC0uMjI4Yy4zNTQtLjE2LjY1My0uMzcuODk4LS42MzIuMjUyLS4yNy40NS0uNTg2LjU5NC0uOTQ5YTMuMjcgMy4yNyAwIDAgMCAuMjE1LTEuMTg4IDMuMTcgMy4xNyAwIDAgMC0uMjE1LTEuMTc2IDIuNzkxIDIuNzkxIDAgMCAwLS41OTUtLjk0OSAyLjU0OCAyLjU0OCAwIDAgMC0uODk3LS42MzIgMi42NzMgMi42NzMgMCAwIDAtMS4xMzgtLjI0Yy0uNDEzIDAtLjc5Ny4wOC0xLjE1MS4yNGEyLjY3OCAyLjY3OCAwIDAgMC0uOTEuNjMyIDIuODk5IDIuODk5IDAgMCAwLS41ODIuOTQ5IDMuMTcgMy4xNyAwIDAgMC0uMjE1IDEuMTc2YzAgLjQyMS4wNzEuODE3LjIxNSAxLjE4OC4xNDMuMzYzLjMzNy42NzkuNTgxLjk0OS4yNTMuMjYxLjU1Ny40NzIuOTEuNjMyLjM1NS4xNTIuNzM5LjIyOCAxLjE1Mi4yMjhaJy8+PC9zdmc+')",
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    width: '214px',
    height: '56px',
    border: 'none',
    '&[data-hovered]': {
      cursor: 'pointer',
      backgroundImage:
        "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMTEnIGhlaWdodD0nNTgnIGZpbGw9J25vbmUnPjxnIGNsaXAtcGF0aD0ndXJsKCNhKSc+PHBhdGggZmlsbD0nIzEyMTJGRicgZD0nTTIxMSAwSDB2NThoMjExVjBaJy8+PHBhdGggZmlsbD0nI2ZmZicgZD0nbTY5Ljk4NiAyNi4zNjggMS4xNTYtMS4wNzFjLjgzMyAxLjA1NCAxLjgxOSAxLjU5OCAyLjk0MSAxLjU5OCAxLjI5MiAwIDIuMDQtLjgxNiAyLjA0LTEuOTA0IDAtMi41NS01LjYyNy0yLjI0NC01LjYyNy02LjAzNSAwLTEuNzM0IDEuNDI4LTMuMTk2IDMuNDUxLTMuMTk2IDEuNjgzIDAgMi45MDcuNzY1IDMuNzkxIDEuOTM4bC0xLjE5IDEuMDM3Yy0uNjk3LTEuMDAzLTEuNTQ3LTEuNTQ3LTIuNTg0LTEuNTQ3LTEuMTA1IDAtMS44MzYuNzQ4LTEuODM2IDEuNzM0IDAgMi41NjcgNS42MjcgMi4yNDQgNS42MjcgNi4wNTIgMCAyLjAyMy0xLjU4MSAzLjM0OS0zLjY1NSAzLjM0OS0xLjc2OCAwLTMuMDc3LS42NjMtNC4xMTQtMS45NTVabTEwLjgxNy01LjcxMkg3OS40NmwxLjQ0NS00LjU1NmgxLjY0OWwtMS43NTEgNC41NTZabTQuODE4LTMuNDUxYy0uNTYgMC0xLjAyLS40NTktMS4wMi0xLjAyYTEuMDIgMS4wMiAwIDAgMSAxLjAyLTEuMDAzYy41NjEgMCAxLjAwMy40NTkgMS4wMDMgMS4wMDMgMCAuNTYxLS40NDIgMS4wMi0xLjAwMyAxLjAyWk04NC44OTEgMjh2LTguNTY4aDEuNDQ0VjI4SDg0Ljg5Wm0zLjc2Ny00LjI4NGMwLTIuNDk5IDEuNzE3LTQuNjI0IDQuNDAzLTQuNjI0IDEuMjQxIDAgMi4yNjEuNDU5IDMuMDQzIDEuMjkyVjE1LjI1aDEuNDQ1VjI4aC0xLjQ0NXYtLjk1MmMtLjc4Mi44MzMtMS44MDIgMS4yOTItMy4wNDMgMS4yOTItMi42ODYgMC00LjQwMy0yLjEyNS00LjQwMy00LjYyNFptMS41MyAwYzAgMS44MTkgMS4yMjQgMy4yNjQgMy4wNDMgMy4yNjQgMS4xOSAwIDIuMjEtLjU3OCAyLjg3My0xLjU5OFYyMi4wNWMtLjY4LTEuMDM3LTEuNy0xLjU5OC0yLjg3My0xLjU5OC0xLjgxOSAwLTMuMDQzIDEuNDQ1LTMuMDQzIDMuMjY0Wm0xOC4wMjMgMi44NzNjLS43OTkgMS4wNzEtMi4wNzQgMS43NTEtMy42NzIgMS43NTEtMi44OSAwLTQuNjc1LTIuMTI1LTQuNjc1LTQuNjI0IDAtMi42MDEgMS42NjYtNC42MjQgNC4zMTgtNC42MjQgMi4zMjkgMCAzLjg0MiAxLjU4MSAzLjg0MiAzLjcyMyAwIC4zNC0uMDUxLjY4LS4xMDIuOTE4aC02LjU2MnYuMDM0YzAgMS44ODcgMS4yOTIgMy4yNjQgMy4yMTMgMy4yNjQgMS4wODggMCAyLjAwNi0uNTEgMi41NjctMS4yNzVsMS4wNzEuODMzWm0tNC4wMTItNi4yNTZjLTEuMzk0IDAtMi4zOC43ODItMi43MiAyLjI2MWg1LjA4M2MtLjA1MS0xLjI0MS0uOTUyLTIuMjYxLTIuMzYzLTIuMjYxWk0xMTAuNDczIDI4di04LjU2OGgxLjQ0NXYuOTY5Yy42OTctLjc2NSAxLjU4MS0xLjMwOSAyLjg1Ni0xLjMwOSAxLjkyMSAwIDMuMzQ5IDEuMjkyIDMuMzQ5IDMuNzIzVjI4aC0xLjQ2MnYtNS4xMzRjMC0xLjUzLS44NS0yLjQxNC0yLjE3Ni0yLjQxNC0xLjI0MSAwLTIuMDIzLjcxNC0yLjU2NyAxLjYxNVYyOGgtMS40NDVabTExLjA1Mi0yLjg3M3YtNC4zNjloLTEuNjE1di0xLjMyNmgxLjYxNVYxNy4yOWgxLjQ2MnYyLjE0MmgyLjk3NXYxLjMyNmgtMi45NzV2NC4zNjljMCAxLjM0My42OCAxLjcxNyAxLjcxNyAxLjcxNy41NjEgMCAuOTUyLS4wNjggMS4yNzUtLjIwNHYxLjI5MmMtLjQwOC4xNy0uODY3LjIzOC0xLjQ3OS4yMzgtMS45MDQgMC0yLjk3NS0uOTUyLTIuOTc1LTMuMDQzWm03LjM3Ny03LjkyMmMtLjU2MSAwLTEuMDItLjQ1OS0xLjAyLTEuMDJhMS4wMiAxLjAyIDAgMCAxIDEuMDItMS4wMDNjLjU2MSAwIDEuMDAzLjQ1OSAxLjAwMyAxLjAwMyAwIC41NjEtLjQ0MiAxLjAyLTEuMDAzIDEuMDJaTTEyOC4xNzEgMjh2LTguNTY4aDEuNDQ1VjI4aC0xLjQ0NVptMy4zNzctOC41NjhoMS42MTV2LTEuMDU0YzAtMS44MzYgMS4yMDctMy4xMjggMy4wNDMtMy4xMjguOTUyIDAgMS43LjM0IDIuMjEuODMzbC0uOTAxIDEuMDU0YTEuNjMzIDEuNjMzIDAgMCAwLTEuMjkyLS41NzhjLS45MzUgMC0xLjU5OC42OC0xLjU5OCAxLjc4NXYxLjA4OGgyLjk3NXYxLjMyNmgtMi45NzVWMjhoLTEuNDYydi03LjI0MmgtMS42MTV2LTEuMzI2Wm04LjU0My0yLjIyN2MtLjU2MSAwLTEuMDItLjQ1OS0xLjAyLTEuMDJhMS4wMiAxLjAyIDAgMCAxIDEuMDItMS4wMDNjLjU2MSAwIDEuMDAzLjQ1OSAxLjAwMyAxLjAwMyAwIC41NjEtLjQ0MiAxLjAyLTEuMDAzIDEuMDJaTTEzOS4zNiAyOHYtOC41NjhoMS40NDVWMjhoLTEuNDQ1Wm0xMi4xMTUtMS40MTFjLS43OTkgMS4wNzEtMi4wNzQgMS43NTEtMy42NzIgMS43NTEtMi44OSAwLTQuNjc1LTIuMTI1LTQuNjc1LTQuNjI0IDAtMi42MDEgMS42NjYtNC42MjQgNC4zMTgtNC42MjQgMi4zMjkgMCAzLjg0MiAxLjU4MSAzLjg0MiAzLjcyMyAwIC4zNC0uMDUxLjY4LS4xMDIuOTE4aC02LjU2MnYuMDM0YzAgMS44ODcgMS4yOTIgMy4yNjQgMy4yMTMgMy4yNjQgMS4wODggMCAyLjAwNi0uNTEgMi41NjctMS4yNzVsMS4wNzEuODMzWm0tNC4wMTItNi4yNTZjLTEuMzk0IDAtMi4zOC43ODItMi43MiAyLjI2MWg1LjA4M2MtLjA1MS0xLjI0MS0uOTUyLTIuMjYxLTIuMzYzLTIuMjYxWk0xNTMuNzM3IDI4di04LjU2OGgxLjQ0NXYxLjA3MWMuNjI5LS43NDggMS40MTEtMS4yNDEgMi40OTktMS4yNDEuMjcyIDAgLjUyNy4wMzQuNzMxLjEwMnYxLjQ5NmEzLjEwNSAzLjEwNSAwIDAgMC0uODUtLjExOWMtMS4xMjIgMC0xLjg1My41NzgtMi4zOCAxLjQ0NVYyOGgtMS40NDVabTEzLjY4NS4zNGMtMS42ODMgMC0yLjgyMi0uOTUyLTIuODIyLTIuNDQ4IDAtMS4zMjYuOTg2LTIuMjc4IDIuODIyLTIuNTY3bDIuODczLS40NzZ2LS41OTVjMC0xLjE5LS44NS0xLjg3LTIuMDU3LTEuODctMS4wMDMgMC0xLjgzNi40NDItMi4zMjkgMS4xOWwtMS4wODgtLjgzM2MuNzQ4LTEuMDIgMS45NTUtMS42NDkgMy40NTEtMS42NDkgMi4xNzYgMCAzLjQ2OCAxLjI3NSAzLjQ2OCAzLjE2MlYyOGgtMS40NDV2LTEuMDg4Yy0uNjQ2LjkwMS0xLjcxNyAxLjQyOC0yLjg3MyAxLjQyOFptLTEuMzc3LTIuNDk5YzAgLjczMS42MjkgMS4yOTIgMS42MTUgMS4yOTIgMS4xMzkgMCAyLjA0LS41OTUgMi42MzUtMS41ODFWMjMuOTJsLTIuNTMzLjQ0MmMtMS4xOS4xODctMS43MTcuNzMxLTEuNzE3IDEuNDc5Wm03LjI1Mi02LjQwOWgxLjU2NGwyLjczNyA3LjA1NSAyLjczNy03LjA1NWgxLjU2NEwxNzguNTUgMjhoLTEuOTA0bC0zLjM0OS04LjU2OFptMTcuODU2IDcuMTU3Yy0uNzk5IDEuMDcxLTIuMDc0IDEuNzUxLTMuNjcyIDEuNzUxLTIuODkgMC00LjY3NS0yLjEyNS00LjY3NS00LjYyNCAwLTIuNjAxIDEuNjY2LTQuNjI0IDQuMzE4LTQuNjI0IDIuMzI5IDAgMy44NDIgMS41ODEgMy44NDIgMy43MjMgMCAuMzQtLjA1MS42OC0uMTAyLjkxOGgtNi41NjJ2LjAzNGMwIDEuODg3IDEuMjkyIDMuMjY0IDMuMjEzIDMuMjY0IDEuMDg4IDAgMi4wMDYtLjUxIDIuNTY3LTEuMjc1bDEuMDcxLjgzM1ptLTQuMDEyLTYuMjU2Yy0xLjM5NCAwLTIuMzguNzgyLTIuNzIgMi4yNjFoNS4wODNjLS4wNTEtMS4yNDEtLjk1Mi0yLjI2MS0yLjM2My0yLjI2MVptMTAuMTg1IDYuNjQ3YzEuMDU0IDAgMS45MDQtLjUxIDIuNDMxLTEuMjc1bDEuMTU2Ljg4NGMtLjc5OSAxLjA3MS0yLjA0IDEuNzUxLTMuNjA0IDEuNzUxLTIuODM5IDAtNC42NTgtMi4xMjUtNC42NTgtNC42MjQgMC0yLjQ5OSAxLjgxOS00LjYyNCA0LjY1OC00LjYyNCAxLjU0NyAwIDIuODA1LjY5NyAzLjYwNCAxLjc1MWwtMS4xNTYuODg0YTIuOTI1IDIuOTI1IDAgMCAwLTIuNDQ4LTEuMjc1Yy0xLjgzNiAwLTMuMTQ1IDEuNDQ1LTMuMTQ1IDMuMjY0IDAgMS44MzYgMS4zMDkgMy4yNjQgMy4xNjIgMy4yNjRaTTcwLjg1NCA0NVYzMi40aDQuMTU4YzIuNzcyIDAgNC40NjQgMS40MjIgNC40NjQgMy43NjIgMCAyLjMyMi0xLjY5MiAzLjc0NC00LjQ2NCAzLjc0NEg3My40MVY0NWgtMi41NTZabTQuMjY2LTEwLjQyMmgtMS43MXYzLjE1aDEuNzFjMS4wOCAwIDEuNzI4LS41NzYgMS43MjgtMS42MDIgMC0uOTU0LS42NDgtMS41NDgtMS43MjgtMS41NDhaTTgxLjI0OSA0NXYtOS4wNzJoMi4yODZ2LjljLjU5NC0uNjEyIDEuMzY4LTEuMDggMi4zOTQtMS4wOC4zMDYgMCAuNTc2LjA1NC43OTIuMTI2djIuMzk0YTMuOTM4IDMuOTM4IDAgMCAwLTEuMDA4LS4xMjZjLTEuMTE2IDAtMS44MzYuNjEyLTIuMTc4IDEuMTdWNDVoLTIuMjg2Wm0xMS4zODYtOS40MzJjMi45NTIgMCA0Ljk2OCAyLjE3OCA0Ljk2OCA0Ljg5NnMtMi4wMTYgNC44OTYtNC45NjggNC44OTYtNC45NjgtMi4xNzgtNC45NjgtNC44OTYgMi4wMTYtNC44OTYgNC45NjgtNC44OTZabS4wMzYgNy42MzJjMS40NTggMCAyLjU1Ni0xLjE3IDIuNTU2LTIuNzM2IDAtMS41ODQtMS4wOTgtMi43MzYtMi41NTYtMi43MzYtMS41MTIgMC0yLjYyOCAxLjE1Mi0yLjYyOCAyLjczNiAwIDEuNTg0IDEuMTE2IDIuNzM2IDIuNjI4IDIuNzM2Wm0xMy4xNzItLjIzNGMxLjQ0IDAgMi41NzQtLjcwMiAzLjI5NC0xLjcyOGwyLjAxNiAxLjU0OGMtMS4xNTIgMS41NjYtMy4wMjQgMi41NzQtNS4zMSAyLjU3NC0zLjk3OCAwLTYuNjk2LTMuMDYtNi42OTYtNi42NnMyLjcxOC02LjY2IDYuNjk2LTYuNjZjMi4yODYgMCA0LjE1OCAxLjAyNiA1LjMxIDIuNTU2bC0yLjAxNiAxLjU2NmMtLjcyLTEuMDI2LTEuODU0LTEuNzI4LTMuMjk0LTEuNzI4LTIuMzc2IDAtNC4wNjggMS44NTQtNC4wNjggNC4yNjZzMS42OTIgNC4yNjYgNC4wNjggNC4yNjZabTExLjM2Ni03LjM5OGMyLjk1MiAwIDQuOTY4IDIuMTc4IDQuOTY4IDQuODk2cy0yLjAxNiA0Ljg5Ni00Ljk2OCA0Ljg5Ni00Ljk2OC0yLjE3OC00Ljk2OC00Ljg5NiAyLjAxNi00Ljg5NiA0Ljk2OC00Ljg5NlptLjAzNiA3LjYzMmMxLjQ1OCAwIDIuNTU2LTEuMTcgMi41NTYtMi43MzYgMC0xLjU4NC0xLjA5OC0yLjczNi0yLjU1Ni0yLjczNi0xLjUxMiAwLTIuNjI4IDEuMTUyLTIuNjI4IDIuNzM2IDAgMS41ODQgMS4xMTYgMi43MzYgMi42MjggMi43MzZabTcuMDE4IDEuOHYtOS4wNzJoMi4yODZ2LjcyYy42My0uNjEyIDEuNDc2LTEuMDggMi42ODItMS4wOCAxLjk2MiAwIDMuNTI4IDEuMzUgMy41MjggNC4wMzJWNDVoLTIuMzIydi01LjMxYzAtMS4yMDYtLjY2Ni0xLjk2Mi0xLjc4Mi0xLjk2Mi0xLjE1MiAwLTEuNzY0Ljc3NC0yLjEwNiAxLjM1VjQ1aC0yLjI4NlptMTEuMDkxIDB2LTkuMDcyaDIuMjg2di43MmMuNjMtLjYxMiAxLjQ3Ni0xLjA4IDIuNjgyLTEuMDggMS45NjIgMCAzLjUyOCAxLjM1IDMuNTI4IDQuMDMyVjQ1aC0yLjMyMnYtNS4zMWMwLTEuMjA2LS42NjYtMS45NjItMS43ODItMS45NjItMS4xNTIgMC0xLjc2NC43NzQtMi4xMDYgMS4zNVY0NWgtMi4yODZabTE5LjQ0NC0xLjQ3NmMtLjg0NiAxLjEzNC0yLjI1IDEuODM2LTMuOTYgMS44MzYtMy4yMjIgMC01LjA0LTIuMjUtNS4wNC00Ljg5NiAwLTIuNjgyIDEuNjkyLTQuODk2IDQuNjYyLTQuODk2IDIuNTIgMCA0LjE3NiAxLjY5MiA0LjE3NiA0LjA2OCAwIC41MDQtLjA3Mi45OS0uMTQ0IDEuMjk2aC02LjM1NGMuMTQ0IDEuNDk0IDEuMTg4IDIuMzc2IDIuNzM2IDIuMzc2Ljk5IDAgMS44LS40MzIgMi4yODYtMS4wOGwxLjYzOCAxLjI5NlptLTQuMzM4LTYuMDQ4Yy0xLjExNiAwLTEuODcyLjU0LTIuMTc4IDEuNzI4aDQuMDg2Yy0uMDM2LS45LS43MDItMS43MjgtMS45MDgtMS43MjhabTEwLjY5NiA1LjcyNGMuODgyIDAgMS41ODQtLjQzMiAyLjAxNi0xLjA2MmwxLjgxOCAxLjM4NmMtLjg0NiAxLjExNi0yLjE3OCAxLjgzNi0zLjgzNCAxLjgzNi0zLjEzMiAwLTUuMDA0LTIuMjUtNS4wMDQtNC44OTZzMS44NzItNC44OTYgNS4wMDQtNC44OTZjMS42NTYgMCAyLjk4OC43MiAzLjgzNCAxLjgzNmwtMS44MTggMS4zODZjLS40MzItLjYzLTEuMTE2LTEuMDYyLTIuMDUyLTEuMDYyLTEuNDk0IDAtMi41OTIgMS4xNTItMi41OTIgMi43MzYgMCAxLjYwMiAxLjA5OCAyLjczNiAyLjYyOCAyLjczNlptNi4yMDQtMS41MTJ2LTMuNjcyaC0xLjY5MnYtMi4wODhoMS42OTJWMzMuNjZoMi4zMDR2Mi4yNjhoMi43NzJ2Mi4wODhoLTIuNzcydjMuNjcyYzAgMS4wMDguNTQgMS40MDQgMS40NCAxLjQwNC42MyAwIDEuMDQ0LS4wNzIgMS4zNS0uMTk4djEuOTk4Yy0uNDUuMTk4LS45OS4yODgtMS43NDYuMjg4LTIuMjY4IDAtMy4zNDgtMS4yNzgtMy4zNDgtMy40OTJaJy8+PHBhdGggZmlsbD0nIzAwMDA5MScgZD0nTTQ2Ljk5MiAxOS4wOTggMzEuOTk4IDEwLjQybC0xNC45OTQgOC43NmEuNjA2LjYwNiAwIDAgMC0uMzA2LjUyNXYxNi45NDhhLjY2Ni42NjYgMCAwIDAgLjMwNi41MjRsMTQuOTkyIDguNiAxNC45OTQtOC43MDZhLjY2Ni42NjYgMCAwIDAgLjMwNi0uNTI0VjE5LjYyNmEuNjA0LjYwNCAwIDAgMC0uMzA0LS41MjhaJy8+PHBhdGggZmlsbD0nI0ZDQzYzQScgZD0nbTI2LjY0MSAxOS41OTgtNS4wMjkgOC42MjgtNC41NTctOS4xNzUgNS4zOS0zLjExMyA0LjQ4OSAzLjE2LS4yOTMuNVptMjAuNjU2IDE2Ljk4VjE5LjYyYS42LjYgMCAwIDAtLjMwNi0uNTIzTDMxLjk5OCAxMC40MicvPjxwYXRoIGZpbGw9JyMwMDYzQ0InIGQ9J00xNi43IDM2LjU3OCAzMiAxMC40MnYzNS4zNjJsLTE0Ljk5Ni04LjYwNWEuNjY1LjY2NSAwIDAgMS0uMzA2LS41MjRWMTkuNzA2bC4wMDIgMTYuODcyWm0yNC42NjktMjAuNzM1IDUuNDU4IDMuMTU1LTQuNDg5IDkuMTUtNS4zODctOS4yMzYgNC40MTgtMy4wN1onLz48cGF0aCBmaWxsPScjZmZmJyBkPSdtNTEuNjA2IDE2LjMwMy0xOS4xOS0xMS4wMmEuOTMzLjkzMyAwIDAgMC0uODMyIDBsLTE5LjE5IDExLjAyYS44ODcuODg3IDAgMCAwLS4zOTQuNjk1djIyYS44ODUuODg1IDAgMCAwIC4zOTQuN2wxOS4xODkgMTEuMDJhLjkzMi45MzIgMCAwIDAgLjgzMiAwbDE5LjE5MS0xMS4wMmEuODg2Ljg4NiAwIDAgMCAuMzk0LS43di0yMmEuODg3Ljg4NyAwIDAgMC0uMzk0LS42OTVaTTIyLjc4OSAzNC4wNTloLjA3OWMtLjA0MiAwLS4wNzkuMDA3LS4wNzkuMDUgMCAuMS4xNTEgMCAuMi4xYS45MTIuOTEyIDAgMCAwLS42MjkuMjc2YzAgLjA1LjEuMDUuMTUxLjA1LS4wNzUuMS0uMjI2LjA1LS4yNzcuMTUyYS4xNzYuMTc2IDAgMCAwIC4xLjA1Yy0uMDUgMC0uMSAwLS4xLjA1di4xNTJjLS4xMjYgMC0uMTc2LjEtLjI3Ny4xNS4yLjE1Mi4zMjcgMCAuNTI4IDAtLjUyOC4yLS45NTYuNDc5LTEuNDg0LjYzLS4xIDAgMCAuMTUtLjEuMTUuMTUxLjEuMjI3LS4wNS4zNzctLjA1LS42NTQuMzc4LTEuMzMzLjctMi4wMzcgMS4xMzNhLjM1MS4zNTEgMCAwIDAtLjEuMmgtLjJjLS4xLjA1LS4wNS4xNzYtLjE1MS4yNzcuMjI2LjE1LjUtLjIuNjU0IDAgLjA1IDAtLjEuMDUtLjIuMDUtLjA1IDAtLjA1LjEtLjEuMWgtLjE1NGMtLjEuMDc1LS4yLjEyNi0uMi4yNzZhLjIyLjIyIDAgMCAwLS4yMjYuMSA5LjAzMSA5LjAzMSAwIDAgMCAzLjE0NC0uNTc4IDcuNjgzIDcuNjgzIDAgMCAwIDIuMDg4LTEuNTYuMTc2LjE3NiAwIDAgMSAuMDUuMWMtLjE0Ny40MzctLjQzLjgxNi0uODA2IDEuMDgtLjI3Ny4xNTItLjQ3OC4zNzgtLjcuNDc5YTQuMDU3IDQuMDU3IDAgMCAwLS40MjguMjc2Yy0uNjMyLjE5Ny0xLjI4MS4zMzUtMS45MzkuNDEybC0uMzA1LjA0NGMtLjIyNS4wMzMtLjQ0OS4wNjktLjY3MS4xMDhsLTEuOTkzLTEuMTM4YS42NDcuNjQ3IDAgMCAxLS4yODgtLjQxMS41Ny41NyAwIDAgMCAuMDk0LS4wNjMuMjY2LjI2NiAwIDAgMC0uMTEzLS4wNzF2LS42NWExMi43ODIgMTIuNzgyIDAgMCAwIDMuMDM4LS45NDIgOC43NDYgOC43NDYgMCAwIDAtMy4wMzctMS4zNDN2LTEuNTE1YTExLjY3IDExLjY3IDAgMCAxIDEuNjM5LjM5MiA2LjQyIDYuNDIgMCAwIDEgMS4xODIuNTc4Yy4xNDcuMTQuMzA3LjI2Ny40NzguMzc3YS45MS45MSAwIDAgMCAuOC4wNWguMzNhMy45NjEgMy45NjEgMCAwIDAgMS45MzctLjkwNWMwIC4wNS4wNS4wNS4xLjA1YTMuNjI5IDMuNjI5IDAgMCAxLS40MjggMS4xMzJjLjAwMy4wNS0uMDQ4LjE1Mi4wNTMuMjAyWm0yLjgxNyAzLjU3Yy4yNTEtLjEuNC0uMjc2LjYyOS0uMzc2LS4wNS4wNS0uMDUuMTUtLjEuMmEzLjY5OSAzLjY5OSAwIDAgMC0uNTI4LjQgMTUuOTY1IDE1Ljk2NSAwIDAgMC0xLjU4NSAxLjYxYy0uMjUyLjMtLjUyOC41NzgtLjguODU1LS4wOTYuMDktLjIuMTcyLS4zMS4yNDVsLTIuNTI3LTEuNDVjLjM2LjAzLjcyMS4wMTMgMS4wNzYtLjA1My4yOTQtLjA4My41OC0uMTkyLjg1NS0uMzI3di4xYy43LS4yNzcgMS4yMzItLjkwNiAxLjkzNy0xLjEzMi4wMjUgMCAuMTI2LjEuMjI2LjA1YTEuODgzIDEuODgzIDAgMCAxIDEuNTA5LS43YzAgLjA1IDAgLjEuMDUuMWguMDI1Yy0uMTUxLjEyNi0uMzI3LjI1LS41LjM3Ny0uMDU3LjA1Mi0uMDA3LjEwMi4wNDMuMTAyWm0tOC45MDgtNi4xNjN2LS4xODZhNS44MTcgNS44MTcgMCAwIDEgMS41ODgtLjE4OCAxLjUyIDEuNTIgMCAwIDEgLjQ3OCAwIDUuODYgNS44NiAwIDAgMC0yLjA2Ni4zNzRabTMwLjYgNS4wODhhLjY2NS42NjUgMCAwIDEtLjMwNi41MjRsLTEwLjA3OSA1Ljg1YTMyLjI5NiAzMi4yOTYgMCAwIDEtMy40MDgtMS4xODQgMi44MjYgMi44MjYgMCAwIDEtLjA1LTIuMjQ1Yy4wOC0uMzA4LjE5OC0uNjA1LjM1Mi0uODgzLjAyNS0uMDI1LjA1LS4wNS4wNS0uMDc2YS4wMjUuMDI1IDAgMCAwIC4wMjUtLjAyNSA0LjMyIDQuMzIgMCAwIDEgLjM3Ny0uNTU1bC4wMTUtLjAxNS4wMi0uMDIxLjAxNS0uMDE1YzAtLjAyNS4wMjUtLjA1LjA1LS4wNzYuMDI1LS4wNTEuMDc1LS4wNzYuMS0uMTI2LjE3Ni0uMTg2LjM3LS4zNTQuNTc5LS41LjIxMy0uMDc3LjQzMS0uMTM2LjY1NC0uMTc3LjgxMS4wNiAxLjYxNy4xNyAyLjQxNS4zMjhhLjc1Mi43NTIgMCAwIDEgLjI3Ny4xYy4zMDEuMDU5LjYxMi4wNDEuOTA1LS4wNWExLjEzNyAxLjEzNyAwIDAgMCAuODU1LS43MDYgMS4yMTIgMS4yMTIgMCAwIDAgLjA1LTEuMDZjLS4xNzgtLjI3NS0uMDEzLS40MzYuMTgxLS41OWwuMDY4LS4wNTRjLjA4Ni0uMDYxLjE2NC0uMTM0LjIzMS0uMjE2LjEyNi0uMjUyLS4xLS40LS4xNTEtLjYzLS4wNS0uMS0uMjI2LS4wNS0uMzI3LS4yLjM1Mi0uMTUxLjg1NS0uNDMuNjI5LS44NTctLjE1MS0uMjI3LS4zNzctLjYzLS4xLS44NTcuMzUyLS4yLjg1NS0uMTUxIDEuMDA2LS40OGExLjEzNyAxLjEzNyAwIDAgMC0uMjkyLTEuMDg0bC0uMDc1LS4xMDhhNC43NTQgNC43NTQgMCAwIDEtLjIxMS0uMzIgNi45MDUgNi45MDUgMCAwIDAtLjUyOC0uNzU3IDQuMjk3IDQuMjk3IDAgMCAxLS41MjgtMS4wMWMtLjE1MS0uMzc3LjA1LS43MDUuMDUtMS4wODNhNi4zNDcgNi4zNDcgMCAwIDAtLjMyNy0yLjE0NGMtLjEyNi0uMzUzLS4xNzYtLjczMS0uMzI3LTEuMDZhMS4xMiAxLjEyIDAgMCAwLS4yMjYtLjU4LjM3NC4zNzQgMCAwIDEgMC0uMzI3Yy4yMDUtLjE0NS4zOTktLjMwNS41NzktLjQ4YS41NjcuNTY3IDAgMCAwLS4yLS43MDVjLS4zMjctLjE1MS0uMy4zMjgtLjUyOC40MjloLS4xNTFjLS4wNS0uMTI2LjA1LS4xNzcuMTUxLS4yNzcgMC0uMDUgMC0uMTUxLS4wNS0uMTUxLS4yIDAtLjM3Ny0uMDUxLS40MjgtLjE1MWEzLjk1NyAzLjk1NyAwIDAgMC0xLjg2MS0xLjI4NmMuMTg4LjA1OC4zODIuMDkxLjU3OS4xLjMzOC4wNzEuNjkuMDM2IDEuMDA2LS4xLjIyNy0uMDc2LjI3Ny0uNDguMzc3LS43MDZhLjguOCAwIDAgMC0uMTUxLS42MzEgMi4xOSAyLjE5IDAgMCAwLS45MDYtLjc1NiA5LjEzIDkuMTMgMCAwIDEtLjY3OS0uMzUzLjk1Ni45NTYgMCAwIDAtLjI1MS0uMTI2Yy0yLjk2NS0xLjQ4NS05LjA2OS0uMi05LjUzNCAwaC0uMDA5YTguMjU0IDguMjU0IDAgMCAwLTEuMjQ5LjQ3NSAzLjkyMiAzLjkyMiAwIDAgMC0yLjM2NSAyLjQ2NSAzLjgzIDMuODMgMCAwIDAtMS4zMzMgMS41MDljLS40MjguOC0xLjA1NiAxLjUwOS0uOTU2IDIuNDE0LjEuNzguMjc3IDEuNDg0LjQyOCAyLjI4OS4wNDMuMjcyLjExLjU0LjIuOC4xLjI3NiAwIC42MjkuMTUxLjg1NS4wNzUuMTUuMDI1LjMyNy4yMjcuNDI4di4yYy4wNS4wNS4wNS4xLjE1MS4xdi4yYy40MzUuNDIzLjgwNy45MDYgMS4xMDcgMS40MzQuMS4yNzYtLjQ3OC4xNS0uNy4wNWE1Ljk3NyA1Ljk3NyAwIDAgMS0xLjEzMi0uOTU2LjE3Ni4xNzYgMCAwIDAtLjA1MS4xYy4yLjM1Mi45MDYuNzguNTI4IDEuMDA2LS4yLjEtLjQyOC0uMTUxLS42MjkuMDUtLjA1LjA3NiAwIC4xNzcgMCAuMjc3LS4yNzctLjItLjU3OC0uMS0uODU1LS4yLS4yLS4wNS0uMjUyLS40MjctLjQ3OC0uNDI3YTE1LjE5MSAxNS4xOTEgMCAwIDAtMS44MTEtLjMyNyAxNS4xNDQgMTUuMTQ0IDAgMCAwLTEuNzM5LS4xNlYxOS43MDdhLjYwNi42MDYgMCAwIDEgLjMwNi0uNTI0bDE0Ljk4Ny04Ljc2MSAxNC45OTQgOC42NzdhLjYwNS42MDUgMCAwIDEgLjMwNi41MjR2MTYuOTMyWm0tNy45NTQtOC4yNjFhLjMyNS4zMjUgMCAwIDEtLjI4Mi4xNDkgMi44NCAyLjg0IDAgMCAwLS4yODIuMjczYy4xIDAgMCAuMTQ5LjEuMTQ5LS4yMDUuMjIzLjA3Ny42OTQtLjIwNS43OTMtLjM3LjA5OS0uNzU4LjA5OS0xLjEyNyAwYS43MjcuNzI3IDAgMCAxIC4xNjctLjAxNmguMDg1YS4zODIuMzgyIDAgMCAwIC4zMzctLjEzMnYtLjJjMC0uMDUtLjA1MS0uMDUtLjEtLjA1YS4xNi4xNiAwIDAgMS0uMS4wNS4yMjMuMjIzIDAgMCAwLS4xNTQtLjIuODA2LjgwNiAwIDAgMS0uNzE4LS4yNzMuNjcuNjcgMCAwIDEgLjQzNi0uMDVjLjEyOCAwIC4wNzctLjIyMy4yMzEtLjMyMmguMTU0Yy4zMDctLjM3Mi44NzEtLjQ3MS45NzQtLjg0MyAwLS4xLS4yODItLjEtLjQ4Ny0uMTVhMi4yNiAyLjI2IDAgMCAwLS44Mi4wNWMtLjM2LjA1LS43MTIuMTQyLTEuMDUxLjI3NC4yOC0uMjA2LjU5Mi0uMzY1LjkyMy0uNDcxLjIzMi0uMDkuNDczLS4xNTcuNzE4LS4ybC4xMzItLjAyNi4xMzMtLjAyN2EuOTcuOTcgMCAwIDEgLjU1NiAwYy4yMzEuMS42MTUuMS42NjYuMjQ4LjEuMjczLS4xNTQuNTQ1LS40MzUuNzQ0LS4wNTcuMDguMTQ5LjEzNS4xNDkuMjNaJy8+PHBhdGggZmlsbD0nI0ZDQzYzQScgZD0nTTY0LjU2IDVIMzlhMiAyIDAgMCAwLTIgMnY5LjMwMmEyIDIgMCAwIDAgMiAyaDI1LjU2YTIgMiAwIDAgMCAyLTJWN2EyIDIgMCAwIDAtMi0yWicvPjxwYXRoIGZpbGw9JyMxNjE2MTYnIGQ9J00zOS41NjIgMTYuMTY4VjcuMzE2aDIuOTIxYy45NyAwIDEuNzMyLjIzNiAyLjI4OS43MDguNTY1LjQ3Mi44NDcgMS4xMTcuODQ3IDEuOTM1IDAgLjgxLS4yODIgMS40NS0uODQ3IDEuOTIyLS41NTcuNDcyLTEuMzIuNzA4LTIuMjg5LjcwOGgtMS4xMjV2My41NzloLTEuNzk2Wm0yLjk5Ny03LjMyMmgtMS4yMDF2Mi4yMTNoMS4yYy4zOCAwIC42NzUtLjA5Ny44ODYtLjI5LjIyLS4xOTUuMzI5LS40NzMuMzI5LS44MzYgMC0uMzM3LS4xMS0uNjAyLS4zMjktLjc5Ni0uMjEtLjE5NC0uNTA2LS4yOTEtLjg4NS0uMjkxWk00Ny4yMyAxNi4xNjhWNy4zMTZoMi43MDdjLjk3IDAgMS43MzYuMjM2IDIuMzAxLjcwOC41NjUuNDcyLjg0NyAxLjExNy44NDcgMS45MzUgMCAuNTMtLjEyNi45OTUtLjM3OSAxLjM5LS4yNDQuMzg5LS41OS42ODgtMS4wMzcuODk5bDIuNzgyIDMuOTJoLTIuMTVsLTIuMzUyLTMuNTc5aC0uOTIzdjMuNTc5aC0xLjc5NVptMi44MDgtNy4zMjJoLTEuMDEydjIuMjEzaDEuMDEyYy4zOCAwIC42NzQtLjA5Ny44ODUtLjI5LjIxLS4xOTUuMzE2LS40NzMuMzE2LS44MzYgMC0uMzM3LS4xMDUtLjYwMi0uMzE2LS43OTYtLjIxLS4xOTQtLjUwNi0uMjkxLS44ODUtLjI5MVpNNTkuNTQ5IDcuMDYzYy42OSAwIDEuMzIzLjEyNiAxLjg5Ni4zOC41ODIuMjUyIDEuMDguNTkgMS40OTIgMS4wMTEuNDE0LjQyMS43MzQuOTE5Ljk2MiAxLjQ5Mi4yMjcuNTY1LjM0MSAxLjE2NC4zNDEgMS43OTYgMCAuNjMyLS4xMTQgMS4yMzUtLjM0MSAxLjgwOGE0LjQ4NSA0LjQ4NSAwIDAgMS0uOTYyIDEuNDhjLS40MTMuNDIxLS45MS43NTgtMS40OTIgMS4wMTFhNC42NDggNC42NDggMCAwIDEtMS44OTYuMzggNC43MzggNC43MzggMCAwIDEtMy40MDItMS4zOTEgNC40ODQgNC40ODQgMCAwIDEtLjk2MS0xLjQ4IDQuODU1IDQuODU1IDAgMCAxLS4zNDItMS44MDhjMC0uNjMzLjExNC0xLjIzMS4zNDItMS43OTYuMjI3LS41NzMuNTQ4LTEuMDcuOTYxLTEuNDkyLjQxMy0uNDIyLjkxLS43NTkgMS40OTItMS4wMTJhNC43MzcgNC43MzcgMCAwIDEgMS45MS0uMzc5Wm0wIDcuNjc2YTIuOCAyLjggMCAwIDAgMS4xMzgtLjIyOGMuMzU0LS4xNi42NTMtLjM3Ljg5OC0uNjMyLjI1Mi0uMjcuNDUtLjU4Ni41OTQtLjk0OWEzLjI3IDMuMjcgMCAwIDAgLjIxNS0xLjE4OCAzLjE3IDMuMTcgMCAwIDAtLjIxNS0xLjE3NiAyLjc5MSAyLjc5MSAwIDAgMC0uNTk1LS45NDkgMi41NDggMi41NDggMCAwIDAtLjg5Ny0uNjMyIDIuNjczIDIuNjczIDAgMCAwLTEuMTM4LS4yNGMtLjQxMyAwLS43OTcuMDgtMS4xNTEuMjRhMi42NzggMi42NzggMCAwIDAtLjkxLjYzMiAyLjg5OSAyLjg5OSAwIDAgMC0uNTgyLjk0OSAzLjE3IDMuMTcgMCAwIDAtLjIxNSAxLjE3NmMwIC40MjEuMDcxLjgxNy4yMTUgMS4xODguMTQzLjM2My4zMzcuNjc5LjU4MS45NDkuMjUzLjI2MS41NTcuNDcyLjkxLjYzMi4zNTUuMTUyLjczOS4yMjggMS4xNTIuMjI4WicvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9J2EnPjxwYXRoIGZpbGw9JyNmZmYnIGQ9J00wIDBoMjExdjU4SDB6Jy8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')",
    },
  },
})

export type ProConnectButtonProps = {
  hint?: boolean // Hide hint in layouts where space doesn't allow it.
}

export const ProConnectButton = ({ hint = true }: ProConnectButtonProps) => {
  const { t } = useTranslation('global', { keyPrefix: 'login' })
  return (
    <VStack alignItems="start">
      <Link
        className={proConnectButtonRecipe()}
        aria-label={t('buttonLabel')}
        href={authUrl()}
        data-attr="login"
      />
      {hint && (
        <Text margin="sm" variant="note">
          <Link
            href="https://agentconnect.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('linkLabel')}
          >
            {t('link')}
          </Link>
        </Text>
      )}
    </VStack>
  )
}