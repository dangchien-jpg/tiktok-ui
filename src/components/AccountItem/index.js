import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://yt3.googleusercontent.com/6xvA--ai-bBDP0ZW1aVI6tfLvrQXWB9jwuCsgkfwPeXmgUESiv3rH9uHmmesw8FaN8Qck7Xp=s160-c-k-c0x00ffffff-no-rj"
                alt="haaha"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
