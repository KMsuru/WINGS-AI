import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()


client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


def get_ai_response(message):
    try:
        response = client.responses.create(
            model="gpt-5-mini",
            input=message
        )

        return response.output_text

    except Exception:
        return None