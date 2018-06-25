/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */
import React from 'react';
const REQUIRED_FIELD_SYMBOL = "*";

function getLabel(label, required, id) {
  if (!label) {
    return null;
  }
  return (
    <label className="control-label" htmlFor={id}>
      {required ? label + REQUIRED_FIELD_SYMBOL : label}
    </label>
  );
}

export default ({
  type,
  classNames,
  errorSchema,
  label,
  hidden,
  help,
  required,
  readonly,
  displayLabel,
  id,
  children,
  formData,
}) => {
  if (hidden) {
    return children;
  }
  if (readonly) {
    if (typeof formData !== 'object') {
      if (!formData) return <div />
    }
    const marginLeft = typeof formData !== 'object' ? '10px' : '0px';
    return (
      <div style={{ display: 'flex', marginLeft }}>
        {displayLabel && label ? <div style={{ color: 'blue' }}>{`${label} : `}</div> : null}
        {children}
      </div>
    );
  }
  return (
    <div>
      {/* 标题 */}
      {displayLabel && label ? getLabel(label, required, id) : null}
      {children}
      {/* 错误信息 */}
      {/* 提示信息 */}
    </div>
  );
}
