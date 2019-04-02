import React, { PureComponent } from 'react';
import css from './Dropdown.module.scss';
import classNames from 'classnames';
import { hideable } from './hideable';

export class Dropdown extends PureComponent {
  state = {
    visible: false,
  };

  handleToggleVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    console.log('render Dropdown');

    const { selected, items, onSelect } = this.props;

    return (
      <div className={classNames({ [css.Opened]: this.state.visible })}>
        <div className={css.Selected} onClick={this.handleToggleVisible}>
          {selected}
          {this.state.visible ? <span>&#128317;</span> : <span>&#128316;</span>}
        </div>
        {this.state.visible &&
          (items ? (
            <div className={css.Items}>
              {items.map((item) => (
                <div className={css.Item} key={item} onClick={() => onSelect(item)}>
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div className={css.Items}>{this.props.children(onSelect, css.Item)}</div>
          ))}
      </div>
    );
  }
}

export const DropdownHideable = hideable(Dropdown);
