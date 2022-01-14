import { forwardRef } from 'react';
import { css } from '@emotion/react';
import { mdiCheck } from '@mdi/js';
import Icon from '@mdi/react';

type CheckboxProps = {
  id: string;
  label: string;
  indeterminate?: boolean;
  title?: string;
  labelHidden?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (
    checked: CheckboxProps['checked'],
    id: CheckboxProps['id'],
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    id,
    label: labelText,
    labelHidden,
    indeterminate = false,
    title,
    onChange,
    ...rest
  },
  ref
) {
  const onChangeHandler = typeof onChange === 'function' ? onChange : () => {};

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <input
        type="checkbox"
        onChange={event => {
          onChangeHandler(event.target.checked, id, event);
        }}
        id={id}
        ref={el => {
          if (el) {
            el.indeterminate = !!indeterminate;
          }
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref && Object(ref) === ref) {
            ref.current = el;
          }
        }}
        css={nativeCheckbox}
        {...rest}
      />
      <label
        htmlFor={id}
        title={title}
        css={css`
          cursor: pointer;

          input:disabled + & {
            cursor: not-allowed;
          }
        `}
      >
        <span css={fauxCheckbox}>
          <span css={checkboxIcon}>
            <Icon path={mdiCheck} aria-hidden="true" />
          </span>
          <span css={checkboxLabel}>{labelText}</span>
        </span>
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;

const nativeCheckbox = css`
  width: 1px;
  height: 1px;
  border: 0;
  clip: rect(0 0 0 0);
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const fauxCheckbox = css`
  display: flex;
  align-items: center;
`;

const checkboxIcon = css`
  position: relative;
  display: flex;
  place-content: center;
  color: #fff;
  width: var(--checkbox-size, 1.2rem);
  height: var(--checkbox-size, 1.2rem);
  margin-right: var(--checkbox-spacing-right, 0.5rem);
  border: var(--checkbox-border, 2px solid #687681);
  transition: border 0.12s ease-in-out 0s, background 0.12s ease-in-out 0s;

  label:hover & {
    border-color: var(--checkbox-color-active, #0070f3); /* color to variable */
  }

  input:focus-visible + label & {
    outline-offset: 6px; /* to global styles */
    outline: 4px solid #0070f3;
  }

  input:checked + label & {
    border-color: var(
      --checkbox-color-checked,
      #687681
    ); /* color to variable */
    background: var(--checkbox-color-checked, #687681); /* color to variable */

    svg {
      transform: scale(1);
    }
  }

  input:disabled + label & {
    border-color: var(
      --checkbox-color-disabled,
      #e2e2e2
    ); /* color to variable */
    background: var(--checkbox-color-disabled, #e2e2e2);
    color: var(--checkbox-color-disabled-text, #687681);
  }

  svg {
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: bottom left;
    transition: transform 0.12s ease-in-out 0s; /* transition to variable */
  }
`;

const checkboxLabel = css`
  font-size: 1rem;
  line-height: 1.3;
  color: var(--checkbox-color-label, #616161); /* color to variable */
  text-align: left;
  word-break: break-word;

  input:disabled + label & {
    color: var(--checkbox-color-label-disabled, #687681);
  }
`;
