import { CSSProperties } from 'react';

import HomeIcon from '@/styles/icons/icon-home.svg?raw';
import DashboardIcon from '@/styles/icons/icon-dashboard.svg?raw';
import UserGroupIcon from '@/styles/icons/icon-user-group.svg?raw';
import NotificationIcon from '@/styles/icons/icon-notification.svg?raw';
import MailIcon from '@/styles/icons/icon-mail.svg?raw';
import UserIcon from '@/styles/icons/icon-user.svg?raw';
import ChatIcon from '@/styles/icons/icon-chat.svg?raw';
import CogIcon from '@/styles/icons/icon-cog.svg?raw';
import MenuIcon from '@/styles/icons/icon-menu.svg?raw';
import CloseIcon from '@/styles/icons/icon-close.svg?raw';
import ChevronDownIcon from '@/styles/icons/icon-cheveron-down.svg?raw';
import ChevronUpIcon from '@/styles/icons/icon-cheveron-up.svg?raw';
import CheckIcon from '@/styles/icons/icon-check.svg?raw';
import InformationIcon from '@/styles/icons/icon-information.svg?raw';
import ImportantIcon from '@/styles/icons/icon-important.svg?raw';
import SearchIcon from '@/styles/icons/icon-search.svg?raw';
import AddIcon from '@/styles/icons/icon-add.svg?raw';
import RemoveIcon from '@/styles/icons/icon-remove.svg?raw';
import EditIcon from '@/styles/icons/icon-edit.svg?raw';
import TrashIcon from '@/styles/icons/icon-trash.svg?raw';
import StarIcon from '@/styles/icons/icon-star.svg?raw';
import HeartIcon from '@/styles/icons/icon-heart.svg?raw';
import RefreshIcon from '@/styles/icons/icon-refresh.svg?raw';
import ExternalWindowIcon from '@/styles/icons/icon-external-window.svg?raw';
import LinkIcon from '@/styles/icons/icon-link.svg?raw';
import GlobeIcon from '@/styles/icons/icon-globe.svg?raw';
import LockIcon from '@/styles/icons/icon-lock.svg?raw';
import LockOpenIcon from '@/styles/icons/icon-lock-open.svg?raw';
import KeyIcon from '@/styles/icons/icon-key.svg?raw';
import PhotoIcon from '@/styles/icons/icon-photo.svg?raw';
import CameraIcon from '@/styles/icons/icon-camera.svg?raw';
import PlayIcon from '@/styles/icons/icon-play.svg?raw';
import PauseIcon from '@/styles/icons/icon-pause.svg?raw';
import StopIcon from '@/styles/icons/icon-stop.svg?raw';
import CalendarIcon from '@/styles/icons/icon-calendar.svg?raw';
import TimeIcon from '@/styles/icons/icon-time.svg?raw';
import DocumentIcon from '@/styles/icons/icon-document.svg?raw';
import FolderIcon from '@/styles/icons/icon-folder.svg?raw';
import ArchiveIcon from '@/styles/icons/icon-archive.svg?raw';
import PrintIcon from '@/styles/icons/icon-print.svg?raw';
import SendIcon from '@/styles/icons/icon-send.svg?raw';
import DotsHorizontalIcon from '@/styles/icons/icon-dots-horizontal.svg?raw';
import DotsVerticalIcon from '@/styles/icons/icon-dots-vertical.svg?raw';
import InterfaceIcon from '@/styles/icons/icon-interface.svg?raw';

const icons: Record<string, string> = {
    home: HomeIcon,
    dashboard: DashboardIcon,
    'user-group': UserGroupIcon,
    users: UserGroupIcon,
    notification: NotificationIcon,
    bell: NotificationIcon,
    mail: MailIcon,
    user: UserIcon,
    chat: ChatIcon,
    'message-square': ChatIcon,
    cog: CogIcon,
    settings: CogIcon,
    menu: MenuIcon,
    'panel-left': MenuIcon,
    close: CloseIcon,
    x: CloseIcon,
    'chevron-down': ChevronDownIcon,
    'chevron-up': ChevronUpIcon,
    check: CheckIcon,
    information: InformationIcon,
    info: InformationIcon,
    important: ImportantIcon,
    warning: ImportantIcon,
    search: SearchIcon,
    add: AddIcon,
    plus: AddIcon,
    remove: RemoveIcon,
    minus: RemoveIcon,
    edit: EditIcon,
    pencil: EditIcon,
    trash: TrashIcon,
    delete: TrashIcon,
    star: StarIcon,
    heart: HeartIcon,
    refresh: RefreshIcon,
    'external-window': ExternalWindowIcon,
    'external-link': ExternalWindowIcon,
    link: LinkIcon,
    globe: GlobeIcon,
    lock: LockIcon,
    'lock-open': LockOpenIcon,
    unlock: LockOpenIcon,
    key: KeyIcon,
    photo: PhotoIcon,
    image: PhotoIcon,
    camera: CameraIcon,
    play: PlayIcon,
    pause: PauseIcon,
    stop: StopIcon,
    calendar: CalendarIcon,
    time: TimeIcon,
    clock: TimeIcon,
    document: DocumentIcon,
    file: DocumentIcon,
    folder: FolderIcon,
    archive: ArchiveIcon,
    print: PrintIcon,
    send: SendIcon,
    'dots-horizontal': DotsHorizontalIcon,
    'more-horizontal': DotsHorizontalIcon,
    'dots-vertical': DotsVerticalIcon,
    'more-vertical': DotsVerticalIcon,
    interface: InterfaceIcon,
    'layout-dashboard': DashboardIcon,
};

export type IconName = keyof typeof icons;

export interface IconProps {
    /** Name of the icon to display */
    name: IconName;
    /** Size of the icon (width and height). Default is 24 */
    size?: number | string;
    /** Additional CSS class names to apply to the icon */
    className?: string;
    /** Additional inline styles to apply to the icon */
    style?: CSSProperties;
    /** Color of the icon. Defaults to current text color */
    color?: string;
}

/** Icon component that renders SVG icons by name */
const Icon = ({ name, size = 24, className = '', style = {}, color }: IconProps) => {
    const svgContent = icons[ name ];

    if (!svgContent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgContent, 'image/svg+xml');
    const svg = doc.querySelector('svg');

    if (!svg) return null;

    svg.setAttribute('width', String(size));
    svg.setAttribute('height', String(size));

    if (color) {
        svg.querySelectorAll('path, circle, rect, polygon, .primary, .secondary').forEach(el => {
            if (!el.getAttribute('fill') || el.getAttribute('fill') !== 'none') {
                (el as SVGElement).style.fill = 'currentColor';
            }
        });
        svg.style.color = color;
    } else {
        svg.querySelectorAll('path, circle, rect, polygon, .primary, .secondary').forEach(el => {
            if (!el.getAttribute('fill') || el.getAttribute('fill') !== 'none') {
                el.setAttribute('fill', 'currentColor');
            }
        });
    }

    const combinedStyle: CSSProperties = {
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        height: size,
        width: size,
        color: color,
        ...style,
    };

    return (
        <span
            className={`icon ${className}`.trim()}
            style={combinedStyle}
            dangerouslySetInnerHTML={{ __html: svg.outerHTML }}
            aria-hidden="true"
        />
    );
};

export default Icon;
