import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lX7xOPwPuLQAX_ezyZt&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAByoWfZ4EudR7ZCE4sNeQqdlBKNxS7uVEEDVsvY_NDZA&oe=6537EFE0"
        alt="Hoaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>@nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
