import * as React from 'react'
import Mdx from './mdx'
import PageLayout from '../../components/page-layout';
import mdxComponents from '../../components/mdx-components';

export default class ComponentsPage extends React.Component<any, any> {
  public render() {
    return (
      <PageLayout menuTree={menuTree}/>
    );
  }
}

const menuTree = [
  {
    id: '3.0',
    text: 'Bileşen Kullanımı',
    path: 'component-list',
    mdx: Mdx.ComponentList
  },
  {
    id: '3.1',
    text: 'Barlar',
    subNodes: [
      {
        id: '3.1.1',
        text: 'WAppBar',
        path: 'w-app-bar',
        mdx: Mdx.WAppBarComponent
      },
      {
        id: '3.1.2',
        text: 'WNotificationBar',
        path: 'w-notification-bar',
        mdx: Mdx.WNotificationBarComponent
      },
      {
        id: 'w-scroll-bar',
        text: 'WScrollBar',
        path: 'w-scroll-bar',
        mdx: Mdx.WScrollBar
      },
      {
        id: '3.1.3',
        text: 'WToolBar',
        path: 'w-tool-bar',
        mdx: Mdx.WToolBarComponent
      },
    ]
  },
  { 
    id: '3.2',
    text: 'Butonlar',
    subNodes: [
      {
        id: '3.2.1',
        text: 'WButton',
        path: 'w-button',
        mdx: Mdx.WButtonComponent
      },
      {
        id: '3.2.2',
        text: 'WButtonGroup',
        path: 'w-button-group',
        mdx: Mdx.WButtonGroupComponent
      },
      {
        id: '3.2.3',
        text: 'WIconButton',
        path: 'w-icon-button',
        mdx: Mdx.WIconButtonComponent
      },
      {
        id: '3.2.4',
        text: 'WLoadingButton',
        path: 'w-loading-button',
        mdx: Mdx.WLoadingButtonComponent
      },
      {
        id: '3.2.5',
        text: 'WSpeedDial',
        path: 'w-speed-dial',
        mdx: Mdx.WSpeedDialComponent
      },
      {
        id: '3.2.6',
        text: 'WToggleButton',
        path: 'w-toggle-button',
        mdx: Mdx.WToggleButtonComponent
      }
    ]
  },  
  { 
    id: '3.3',
    text: 'Dialoglar',
    subNodes: [
      {
        id: '3.3.1',
        text: 'WBasicDialog',
        path: 'w-basic-dialog',
        mdx: Mdx.WBasicDialogComponent
      },
      {
        id: '3.3.2',
        text: 'WDialog',
        path: 'w-dialog',
        mdx: Mdx.WDialogComponent
      },
      {
        id: '3.3.3',
        text: 'WMessageDialog',
        path: 'w-message-dialog',
        mdx: Mdx.WMessageDialogComponent
      },
      {
        id: '3.3.4',
        text: 'WPopover',
        path: 'w-popover',
        mdx: Mdx.WPopoverComponent
      },
      {
        id: '3.3.5',
        text: 'WPopper',
        path: 'w-popper',
        mdx: Mdx.WPopperComponent
      }
    ]
  },
  {
    id: '3.4',
    text: 'Formlar',
    subNodes: [
      {
        id: '3.4.1',
        text: 'WForm',
        path: 'w-form',
        mdx: Mdx.WFormComponent
      }
    ]
  },
  {
    id: '3.5',
    text: 'Inputlar',
    subNodes: [
      {
        id: '3.5.1',
        text: 'WCheckbox',
        path: 'w-checkbox',
        mdx: Mdx.WCheckboxComponent
      },
      {
        id: '3.5.2',
        text: 'WDateTimePicker',
        path: 'w-date-time-picker',
        mdx: Mdx.WDateTimePickerComponent
      },
      {
        id: '3.5.3',
        text: 'WDatePicker',
        path: 'w-date-picker',
        mdx: Mdx.WDatePickerComponent
      },
      {
        id: '3.5.4',
        text: 'WRadioGroup',
        path: 'w-radio-group',
        mdx: Mdx.WRadioGroupComponent
      },
      {
        id: '3.5.5',
        text: 'WSelect',
        path: 'w-select',
        mdx: Mdx.WSelectComponent
      },
      {
        id: '3.5.6',
        text: 'WSlider',
        path: 'w-slider',
        mdx: Mdx.WSliderComponent
      },
      {
        id: '3.5.7',
        text: 'WSwitch',
        path: 'w-switch',
        mdx: Mdx.WSwitchComponent
      },
      {
        id: '3.5.8',
        text: 'WTextField',
        path: 'w-text-field',
        mdx: Mdx.WTextFieldComponent
      },
      {
        id: '3.5.9',
        text: 'WTimePicker',
        path: 'w-time-picker',
        mdx: Mdx.WTimePickerComponent
      },
    ]
  },
  {
    id: '3.6',
    text: 'Layoutlar',
    subNodes: [
      {
        id: '3.6.1',
        text: 'WCard',
        path: 'w-card',
        mdx: Mdx.WCardComponent
      },
      {
        id: '3.6.2',
        text: 'WCollapse',
        path: 'w-collapse',
        mdx: Mdx.WCollapseComponent
      },
      {
        id: '3.6.3',
        text: 'WContainer',
        path: 'w-container',
        mdx: Mdx.WContainerComponent
      },
      {
        id: '3.6.4',
        text: 'WDivider',
        path: 'w-divider',
        mdx: Mdx.WDividerComponent
      },
      {
        id: '3.6.5',
        text: 'WDrawer',
        path: 'w-drawer',
        mdx: Mdx.WDrawerComponent
      },
      {
        id: '3.6.6',
        text: 'WExpansionPanel',
        path: 'w-expansion-panel',
        mdx: Mdx.WExpansionPanelComponent
      },
      {
        id: '3.6.7',
        text: 'WGrid',
        path: 'w-grid',
        mdx: Mdx.WGridComponent
      },
      {
        id: '3.6.8',
        text: 'WNestedPageLayout',
        path: 'w-nested-page-layout',
        mdx: Mdx.WNestedPageLayoutComponent
      },
      {
        id: '3.6.9',
        text: 'WPaper',
        path: 'w-paper',
        mdx: Mdx.WPaperComponent
      },
      {
        id: '3.6.10',
        text: 'WSwipeableView',
        path: 'w-swipeable-view',
        mdx: Mdx.WSwipeableViewComponent
      },
      {
        id: '3.6.11',
        text: 'WTabContainer',
        path: 'w-tab-container',
        mdx: Mdx.WTabContainerComponent
      },
      {
        id: '3.6.12',
        text: 'WWizard',
        path: 'w-wizard',
        mdx: Mdx.WWizardComponent
      }
    ]
  },
  {
    id: '3.7',
    text: 'Listeler',
    subNodes: [
      {
        id: '3.7.1',
        text: 'WList',
        path: 'w-list',
        mdx: Mdx.WListComponent
      },
      {
        id: '3.7.2',
        text: 'WMenu',
        path: 'w-menu',
        mdx: Mdx.WMenuComponent
      },
    ]
  },
  {
    id: '3.8',
    text: 'Media Bileşenleri',
    subNodes: [
      {
        id: '3.8.1',
        text: 'WAvatar',
        path: 'w-avatar',
        mdx: Mdx.WAvatarComponent
      },
      {
        id: '3.8.2',
        text: 'WBadge',
        path: 'w-badge',
        mdx: Mdx.WBadgeComponent
      },
      {
        id: '3.8.3',
        text: 'WIcon',
        path: 'w-icon',
        mdx: Mdx.WIconComponent
      },
      {
        id: '3.8.4',
        text: 'WLink',
        path: 'w-link',
        mdx: Mdx.WLinkComponent
      },
      {
        id: '3.8.5',
        text: 'WRating',
        path: 'w-rating',
        mdx: Mdx.WRatingComponent
      },
    ]
  },
  { 
    id: '3.9',
    text: 'Progress Barlar',
    subNodes: [
      {
        id: '3.9.1',
        text: 'WCircularProgress',
        path: 'w-circular-progress',
        mdx: Mdx.WCircularProgressComponent
      },
      {
        id: '3.9.2',
        text: 'WLinearProgress',
        path: 'w-linear-progress',
        mdx: Mdx.WLinearProgressComponent
      },
      {
        id: '3.9.3',
        text: 'WSkeleton',
        path: 'w-skeleton',
        mdx: Mdx.WSkeletonComponent
      }
    ]
  },
  { 
    id: '3.10',
    text: 'Tablolar',
    subNodes: [
      {
        id: '3.10.1',
        text: 'WTable',
        path: 'w-table',
        mdx: Mdx.WTableComponent
      }
    ]
  },
  {
    id: '3.11',
    text: 'Grafikler',
    subNodes: [
      {
        id: '3.11.1',
        text: 'WChart',
        path: 'w-chart',
        mdx: Mdx.WChartComponent
      }
    ]
  },
  {
    id: '3.99',
    text: 'Diğerleri',
    subNodes: [     
      {
        id: '3.99.1',
        text: 'WChip',
        path: 'w-chip',
        mdx: Mdx.WChipComponent
      },    
      {
        id: '3.99.2',
        text: 'WClickAwayListerer',
        path: 'w-click-away-listener',
        mdx: Mdx.WClickAwayListenerComponent
      },    
      {
        id: '3.99.3',
        text: 'WTooltip',
        path: 'w-tooltip',
        mdx: Mdx.WTooltipComponent
      }, 
      {
        id: '3.99.4',
        text: 'WTypography',
        path: 'w-typography',
        mdx: Mdx.WTypographyComponent
      }
    ]        
  }      
]
