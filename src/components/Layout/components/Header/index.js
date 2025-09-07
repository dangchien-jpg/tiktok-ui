import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagicWandSparkles,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input className={cx('input')} placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <span className={cx('seperate')}></span>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <h3 className={cx('upload')}>Upload</h3>
                    <button className={cx('actions-btn')}>Log in</button>
                    <div className={cx('show')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
