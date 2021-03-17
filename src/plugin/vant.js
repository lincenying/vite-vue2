/* eslint-disable no-inline-comments */
import {
    // ActionSheet,
    // AddressEdit,
    // AddressList,
    // Area,
    // Badge,
    Button,
    // Calendar,
    // Card,
    Cell,
    CellGroup,
    // Checkbox,
    // CheckboxGroup,
    // Circle,
    // Col,
    // Collapse,
    // CollapseItem,
    // ContactCard,
    // ContactEdit,
    // ContactList,
    CountDown,
    // Coupon,
    // CouponCell,
    // CouponList,
    DatetimePicker,
    Dialog,
    Divider,
    // DropdownItem,
    // DropdownMenu,
    Empty,
    Field,
    // Form,
    // GoodsAction,
    // GoodsActionButton,
    // GoodsActionIcon,
    Grid,
    GridItem,
    // Icon,
    Image,
    ImagePreview,
    // IndexAnchor,
    // IndexBar,
    // Info,
    // Lazyload,
    List,
    Loading,
    // Locale,
    NavBar,
    // NoticeBar,
    // Notify,
    // NumberKeyboard,
    // Overlay,
    // Pagination,
    Panel,
    // PasswordInput,
    // Picker,
    // Popover,
    Popup,
    // Progress,
    PullRefresh,
    // Radio,
    // RadioGroup,
    // Rate,
    // Row,
    // Search,
    // ShareSheet,
    // Sidebar,
    // SidebarItem,
    Skeleton,
    // Sku,
    // Slider,
    // Step,
    // Stepper,
    // Steps,
    // Sticky,
    // SubmitBar,
    // Swipe,
    // SwipeCell,
    // SwipeItem,
    // Switch,
    // SwitchCell,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    // Tag,
    Toast
    // TreeSelect,
    // Uploader
} from 'vant'

function install(Vue) {
    if (install.installed) {
        return
    }

    // Vue.component(ActionSheet.name, ActionSheet) // van-action-sheet
    // Vue.component(AddressEdit.name, AddressEdit) // van-address-edit
    // Vue.component(AddressList.name, AddressList) // van-address-list
    // Vue.component(Area.name, Area) // van-area
    // Vue.component(Badge.name, Badge) // van-badge
    Vue.component(Button.name, Button) // van-button
    // Vue.component(Calendar.name, Calendar) // van-calendar
    // Vue.component(Card.name, Card) // van-card
    Vue.component(Cell.name, Cell) // van-cell
    Vue.component(CellGroup.name, CellGroup) // van-cell-group
    // Vue.component(Checkbox.name, Checkbox) // van-checkbox
    // Vue.component(CheckboxGroup.name, CheckboxGroup) // van-checkbox-group
    // Vue.component(Circle.name, Circle) // van-circle
    // Vue.component(Col.name, Col) // van-col
    // Vue.component(Collapse.name, Collapse) // van-collapse
    // Vue.component(CollapseItem.name, CollapseItem) // van-collapse-item
    // Vue.component(ContactCard.name, ContactCard) // van-contact-card
    // Vue.component(ContactEdit.name, ContactEdit) // van-contact-edit
    // Vue.component(ContactList.name, ContactList) // van-contact-list
    Vue.component(CountDown.name, CountDown) // van-count-down
    // Vue.component(Coupon.name, Coupon) // van-coupon
    // Vue.component(CouponCell.name, CouponCell) // van-coupon-cell
    // Vue.component(CouponList.name, CouponList) // van-coupon-list
    Vue.component(DatetimePicker.name, DatetimePicker) // van-datetime-picker
    Vue.component(Divider.name, Divider) // van-divider
    // Vue.component(DropdownItem.name, DropdownItem) // van-dropdown-item
    // Vue.component(DropdownMenu.name, DropdownMenu) // van-dropdown-menu
    Vue.component(Empty.name, Empty) // van-empty
    Vue.component(Field.name, Field) // van-field
    // Vue.component(Form.name, Form) // van-form
    // Vue.component(GoodsAction.name, GoodsAction) // van-goods-action
    // Vue.component(GoodsActionButton.name, GoodsActionButton) // van-goods-action-button
    // Vue.component(GoodsActionIcon.name, GoodsActionIcon) // van-goods-action-icon
    Vue.component(Grid.name, Grid) // van-grid
    Vue.component(GridItem.name, GridItem) // van-grid-item
    // Vue.component(Icon.name, Icon) // van-icon
    Vue.component(Image.name, Image) // van-image
    // Vue.component(IndexAnchor.name, IndexAnchor) // van-index-anchor
    // Vue.component(IndexBar.name, IndexBar) // van-index-bar
    // Vue.component(Info.name, Info) // van-info
    // Vue.component(Lazyload.name, Lazyload) // van-lazyload
    Vue.component(List.name, List) // van-list
    Vue.component(Loading.name, Loading) // van-loading
    // Vue.component(Locale.name, Locale) // van-locale
    Vue.component(NavBar.name, NavBar) // van-navBar
    // Vue.component(NoticeBar.name, NoticeBar) // van-notice-bar
    // Vue.component(Notify.name, Notify) // van-notify
    // Vue.component(NumberKeyboard.name, NumberKeyboard) // van-number-keyboard
    // Vue.component(Overlay.name, Overlay) // van-overlay
    // Vue.component(Pagination.name, Pagination) // van-pagination
    Vue.component(Panel.name, Panel) // van-panel
    // Vue.component(PasswordInput.name, PasswordInput) // van-password-input
    // Vue.component(Picker.name, Picker) // van-picker
    // Vue.component(Popover.name, Popover) // van-popover
    Vue.component(Popup.name, Popup) // van-popup
    // Vue.component(Progress.name, Progress) // van-progress
    Vue.component(PullRefresh.name, PullRefresh) // van-pull-refresh
    // Vue.component(Radio.name, Radio) // van-radio
    // Vue.component(RadioGroup.name, RadioGroup) // van-radio-group
    // Vue.component(Rate.name, Rate) // van-rate
    // Vue.component(Row.name, Row) // van-row
    // Vue.component(Search.name, Search) // van-search
    // Vue.component(ShareSheet.name, ShareSheet) // van-share-sheet
    // Vue.component(Sidebar.name, Sidebar) // van-sidebar
    // Vue.component(SidebarItem.name, SidebarItem) // van-sidebar-item
    Vue.component(Skeleton.name, Skeleton) // van-skeleton
    // // Vue.component(Sku.name, Sku) // van-sku
    // // Vue.component(Slider.name, Slider) // van-slider
    // Vue.component(Step.name, Step) // van-step
    // Vue.component(Stepper.name, Stepper) // van-stepper
    // Vue.component(Steps.name, Steps) // van-steps
    // Vue.component(Sticky.name, Sticky) // van-sticky
    // Vue.component(SubmitBar.name, SubmitBar) // van-submit-bar
    // Vue.component(Swipe.name, Swipe) // van-swipe
    // Vue.component(SwipeCell.name, SwipeCell) // van-swipe-cell
    // Vue.component(SwipeItem.name, SwipeItem) // van-swipe-item
    // Vue.component(Switch.name, Switch) // van-switch
    // Vue.component(SwitchCell.name, SwitchCell) // van-switch-cell
    Vue.component(Tab.name, Tab) // van-tab
    Vue.component(Tabbar.name, Tabbar) // van-tabbar
    Vue.component(TabbarItem.name, TabbarItem) // van-tabbar-item
    Vue.component(Tabs.name, Tabs) // van-tabs
    // Vue.component(Tag.name, Tag) // van-tag
    // Vue.component(TreeSelect.name, TreeSelect) // van-tree-select
    // Vue.component(Uploader.name, Uploader) // van-uploader

    Vue.use(Dialog)
    Vue.use(Toast)
    Vue.use(ImagePreview)
}
export default install
