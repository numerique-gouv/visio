import {
  RiAccountBoxLine,
  RiMegaphoneLine,
  RiSettings3Line,
} from '@remixicon/react'
import { MenuItem, Menu as RACMenu, MenuSection } from 'react-aria-components'
import { useTranslation } from 'react-i18next'
import { Separator } from '@/primitives/Separator'
import { useSidePanel } from '../../../hooks/useSidePanel'
import { menuRecipe } from '@/primitives/menuRecipe.ts'
import { useSettingsDialog } from '../SettingsDialogContext'
import { GRIST_FORM } from '@/utils/constants'

// @todo try refactoring it to use MenuList component
export const OptionsMenuItems = () => {
  const { t } = useTranslation('rooms', { keyPrefix: 'options.items' })
  const { toggleEffects } = useSidePanel()
  const { setDialogOpen } = useSettingsDialog()
  return (
    <RACMenu
      style={{
        minWidth: '150px',
        width: '300px',
      }}
    >
      <MenuSection>
        <MenuItem
          onAction={() => toggleEffects()}
          className={menuRecipe({ icon: true }).item}
        >
          <RiAccountBoxLine size={20} />
          {t('effects')}
        </MenuItem>
      </MenuSection>
      <Separator />
      <MenuSection>
        <MenuItem
          href={GRIST_FORM}
          target="_blank"
          className={menuRecipe({ icon: true }).item}
        >
          <RiMegaphoneLine size={20} />
          {t('feedback')}
        </MenuItem>
        <MenuItem
          className={menuRecipe({ icon: true }).item}
          onAction={() => setDialogOpen(true)}
        >
          <RiSettings3Line size={20} />
          {t('settings')}
        </MenuItem>
      </MenuSection>
    </RACMenu>
  )
}
