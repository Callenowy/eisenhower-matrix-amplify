import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 1fr;
  grid-template-rows: 40px 1fr 1fr;
  grid-template-areas:
    '.  labelUrgent labelNotUrgent'
    'labelImportant urgentImportant urgentNotImportant'
    'labelNotImportant notUrgentImportant notUrgentNotImportant';
  width: 100%;
  height: 100%;
  min-height: 800px;

  --group-border-color: #eaeaea;
`;

const Label = styled.h3`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  background: transparen;
  border: 0;
`;

const Badge = styled.span`
  color: var(--group-variant-color, currentColor);
  border-bottom: 1px solid var(--group-variant-color, currentColor);
`;

const Counter = styled.span`
  background: var(--group-variant-color, currentColor);
  color: #fff;
  border-bottom: 1px solid var(--group-variant-color, currentColor);
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 0.75rem;
`;

const labelSideways = css`
  writing-mode: sideways-lr;
  text-orientation: mixed;
`;

const commonLabel = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const labelUrgent = css`
  grid-area: labelUrgent;
`;

const labelNotUrgent = css`
  grid-area: labelNotUrgent;
  border-left: 1px solid var(--group-border-color, #eaeaea);
`;

const labelImportant = css`
  grid-area: labelImportant;
`;

const labelNotImportant = css`
  grid-area: labelNotImportant;
  border-top: 1px solid var(--group-border-color, #eaeaea);
`;

const commonContent = css`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const contentUrgentImportant = css`
  grid-area: urgentImportant;
  --group-variant-color: #5fa283;
`;

const contentUrgentNotImportant = css`
  grid-area: urgentNotImportant;
  border-left: 1px solid var(--group-border-color, #eaeaea);
  --group-variant-color: #4573d3;
`;

const contentNotUrgentImportant = css`
  grid-area: notUrgentImportant;
  border-top: 1px solid var(--group-border-color, #eaeaea);
  --group-variant-color: #ed8e72;
`;

const contentNotUrgentNotImportant = css`
  grid-area: notUrgentNotImportant;
  border-top: 1px solid var(--group-border-color, #eaeaea);
  border-left: 1px solid var(--group-border-color, #eaeaea);
  --group-variant-color: #f1696b;
`;

const sectionHeader = css`
  display: flex;
  justify-content: space-between;
`;

function EisenhowerGrid() {
  return (
    <Grid>
      <div css={[labelUrgent, commonLabel]}>
        <Label>Urgent</Label>
      </div>
      <div css={[labelNotUrgent, commonLabel]}>
        <Label>Not Urgent</Label>
      </div>
      <div css={[labelImportant, labelSideways, commonLabel]}>
        <Label>Important</Label>
      </div>
      <div css={[labelNotImportant, labelSideways, commonLabel]}>
        <Label>Not Important</Label>
      </div>

      <section css={[contentUrgentImportant, commonContent]}>
        <header css={sectionHeader}>
          <Badge>Do:</Badge>
          <Counter>0</Counter>
        </header>

        <div
          css={css`
            margin: auto 0 0 0;
          `}
        >
          <button
            css={css`
              width: 100%;
              border: 0;
              background: rgba(95, 162, 131, 0.2);
              border-radius: 8px;
              padding: 0.5rem 0.5rem;
              color: rgb(95, 162, 131);
            `}
          >
            Add new task
          </button>
        </div>
      </section>
      <section css={[contentUrgentNotImportant, commonContent]}>
        <header css={sectionHeader}>
          <Badge>Schedule:</Badge>
          <Counter>0</Counter>
        </header>
      </section>
      <section css={[contentNotUrgentImportant, commonContent]}>
        <header css={sectionHeader}>
          <Badge>Delegate:</Badge>
          <Counter>0</Counter>
        </header>
      </section>
      <section css={[contentNotUrgentNotImportant, commonContent]}>
        <header css={sectionHeader}>
          <Badge>Delete:</Badge>
          <Counter>0</Counter>
        </header>
      </section>
    </Grid>
  );
}

export default EisenhowerGrid;

/* 
  @TODO:
  - [ ] add assistive text to Badge
  - [ ] add assistive text to Counter'a

*/
