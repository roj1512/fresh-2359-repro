export function MyCoolIsland() {
  return (
    <>
      <p>
        <a href="/b">Go to B (client-side)</a>
      </p>

      {/* Open the inspector to see how the f-client-nav disappears */}
      <p f-client-nav={false}>
        <a href="/b">
          Go to B (supposed to be server-side) [<code>
            f-client-nav={'{false}'}
          </code>]
        </a>
      </p>

      {/* But this one does not disappear */}
      <p f-client-nav={"false" as unknown as boolean}>
        <a href="/b">
          Go to B (server-side) [<code>
            f-client-nav={'{"false" as unknown as boolean}'}
          </code>]
        </a>
      </p>
    </>
  );
}
