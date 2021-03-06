import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const CastingIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M13.586,11.836a4.081,4.081,0,0,1,4.078,4.078.418.418,0,0,1-.414.422.414.414,0,0,1-.414-.422,3.258,3.258,0,0,0-3.25-3.25.418.418,0,0,1-.422-.414A.414.414,0,0,1,13.586,11.836Zm0,1.664A2.421,2.421,0,0,1,16,15.914a.418.418,0,1,1-.836,0,1.584,1.584,0,0,0-1.578-1.578.418.418,0,1,1,0-.836ZM21.914,10A1.087,1.087,0,0,1,23,11.023v5.891A1.087,1.087,0,0,1,21.977,18H15v-.836h6.914a.246.246,0,0,0,.25-.211V11.047a.248.248,0,0,0-.211-.211H12.094a.246.246,0,0,0-.25.25L11.836,14H11l.008-2.922A1.091,1.091,0,0,1,12.031,10ZM11.5,20a.5.5,0,1,1-.5.5A.5.5,0,0,1,11.5,20Zm-1.414-4a.247.247,0,0,0-.25.219v5.7a.246.246,0,0,0,.211.25h2.867a.246.246,0,0,0,.25-.211v-5.7c0-.109-.094-.25-.211-.25Zm2.828-.836A1.087,1.087,0,0,1,14,16.188v5.726A1.087,1.087,0,0,1,12.977,23H10.086A1.087,1.087,0,0,1,9,21.977V16.25a1.1,1.1,0,0,1,1.023-1.086Z" />
    </svg>
  ),
  displayName: 'CastingIcon',
});
