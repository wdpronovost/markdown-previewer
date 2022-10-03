import { useEffect } from 'react';
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkHighlight from 'remark-highlight.js'
import { useRemark } from 'react-remark';

export default function Previewer({ value }) {

  const [reactContent, setMarkdownSource] = useRemark({
    remarkPlugins: [remarkParse, remarkHighlight, remarkGfm, remarkBreaks],
    remarkToRehypeOptions: { allowDangerousHtml: true },
  })

  useEffect(() => {
    setMarkdownSource(value)
  }, [setMarkdownSource, value])

  return (
      reactContent
  )
}