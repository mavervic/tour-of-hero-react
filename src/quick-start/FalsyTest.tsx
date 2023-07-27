/**
 * @usageNotes 0跟NaN會被渲染出來
 */
export default function FalsyTest() {
  return (
    <>
      <h1>{false}</h1>
      <h1>{0}</h1>
      <h1>{''}</h1>
      <h1>{null}</h1>
      <h1>{undefined}</h1>
      <h1>{NaN}</h1>

      <h1>{false || 'false is falthy'}</h1>
      <h1>{0 || '0 is falthy'}</h1>
      <h1>{'' || 'blank is falthy'}</h1>
      <h1>{null || 'null is falthy'}</h1>
      <h1>{undefined || 'undefined is falthy'}</h1>
      <h1>{NaN || 'NaN is falthy'}</h1>
    </>
  );
}
