type MatchedSubstring = { length: number; offset: number }

type StructuredFormatting = {
    main_text: string
    main_text_matched_substrings: MatchedSubstring[]
    secondary_text?: string
    secondary_text_matched_substrings?: MatchedSubstring[]
}

interface IPrediction {
    place_id: string
    structured_formatting: StructuredFormatting
}

export default IPrediction
