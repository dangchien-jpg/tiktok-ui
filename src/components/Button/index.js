import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    outline = false,
    primary = false,
    children,
    small = false,
    large = false,
    text = false,
    disable = false,
    rounded = false,
    leftIcon,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    children: PropTypes.node.isRequired,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
