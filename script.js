// Replace placeholder values in this single data structure with approved project records.
const requirementGroups = [
  {
    group: 'ai',
    "title": "AI Flower Image Generation User Stories",
    "epic": "EPIC — AI Flower Customization & Preview",
    "scope": "Project: HoaTheoMua · Workstream A: AI flower customization and image generation · F01 — Initialize requests · F02 — Generate AI images · F03 — Manage results",
    "source": "Source: STORY-030, STORY-033, STORY-034, STORY-040 in Document First V2.",
    "notice": "Draft — approval not confirmed. US-A01 to US-A10 are a proposed portfolio decomposition, not the original approved User Story IDs. Acceptance criteria are restructured from the source document.",
    "summary": "3 functional groups · 10 proposed User Stories · 54 restructured acceptance criteria · Business Rules reference the original BR IDs in Document First V2.",
    "purpose": "Purpose: Demonstrate User Story Splitting, Requirements Analysis, Acceptance Criteria Definition and Business Rule Traceability in a BA portfolio.",
    "items": [
      {
        "id": "US-A01",
        "featureGroup": "F01 — Initialize a flower design request",
        "title": "Start a request from an existing flower Combo",
        "source": "Source: STORY-030",
        "story": "As a signed-in customer, I want to select an existing flower Combo to start a flower design request, so that I can use its information as the basis for customizing a design to my preferences.",
        "criteria": [
          {
            "title": "AC-01 — Start from a Combo",
            "given": "Given the customer is signed in and viewing the flower Combo list.",
            "when": "When the customer selects “Create flower design” on a Combo.",
            "then": "Then the system opens the initialization form and records the selected Combo as the source Combo."
          },
          {
            "title": "AC-02 — Display Combo information",
            "given": "Given the customer has selected a source Combo.",
            "when": "When the initialization form is displayed.",
            "then": "Then the system displays the Combo image, name, description, material components and price from Core Database."
          },
          {
            "title": "AC-03 — Enter the request name",
            "given": "Given the customer is entering a request name.",
            "when": "When the customer selects “Next”.",
            "then": "Then the system trims leading and trailing whitespace and only allows continuation if the name contains 1–100 characters."
          },
          {
            "title": "AC-04 — Validate source data",
            "given": "Given the source Combo is no longer available.",
            "when": "When the system validates the initialization data.",
            "then": "Then the system prevents continuation with an invalid Combo."
          }
        ],
        "rules": [
          {
            "id": "BR-068",
            "text": "The request name must contain 1–100 characters after trimming leading and trailing whitespace."
          },
          {
            "id": "BR-069",
            "text": "The request name is required."
          },
          {
            "id": "BR-079",
            "text": "The Combo must be retrieved and validated from Core Database."
          },
          {
            "id": "BR-070",
            "text": "The request must record the original source Combo."
          }
        ]
      },
      {
        "id": "US-A02",
        "featureGroup": "F01 — Initialize a flower design request",
        "title": "Select a Size and configure Combos by Size",
        "source": "Source: STORY-030",
        "story": "As a customer initializing a flower design request, I want to select a Size and its Combo configuration, so that I can determine the flower components and quantities for my desired bouquet size.",
        "criteria": [
          {
            "title": "AC-01 — Select a Size",
            "given": "Given the customer has entered valid initialization information.",
            "when": "When the customer reaches the Size selection step.",
            "then": "Then the system displays available Sizes and allows only one Size to be selected."
          },
          {
            "title": "AC-02 — Display configurations by Size",
            "given": "Given the customer has selected a Size.",
            "when": "When the system loads configuration data.",
            "then": "Then the system displays the Combo configuration options permitted by the shop."
          },
          {
            "title": "AC-03 — Increase the source Combo quantity",
            "given": "Given the Size allows an increase in source Combo quantity.",
            "when": "When the customer selects the option to increase Combos.",
            "then": "Then the system records the source Combo quantity within configured limits."
          },
          {
            "title": "AC-04 — Combine other Combos",
            "given": "Given the Size allows combining other Combos.",
            "when": "When the customer selects a combination option.",
            "then": "Then the system only permits Combos and quantities within the configured scope."
          },
          {
            "title": "AC-05 — Record the configuration",
            "given": "Given the customer has selected a valid option.",
            "when": "When the customer continues customizing.",
            "then": "Then the system records the Size and one selected Combo configuration."
          }
        ],
        "rules": [
          {
            "id": "BR-267",
            "text": "The customer must select a valid Size."
          },
          {
            "id": "BR-268",
            "text": "The Combo configuration must follow the shop configuration for the selected Size."
          },
          {
            "id": "BR-070",
            "text": "Record the source Combo and the Combo configuration by Size."
          },
          {
            "id": "BR-071",
            "text": "Each request stores only one Combo configuration by Size at a time."
          }
        ]
      },
      {
        "id": "US-A03",
        "featureGroup": "F01 — Initialize a flower design request",
        "title": "Customize bouquet style and Mockup",
        "source": "Source: STORY-030",
        "story": "As a customer customizing a flower design, I want to select a bouquet style and Mockup that match my preferences, so that I can guide the shape and composition of the AI-generated flower image.",
        "criteria": [
          {
            "title": "AC-01 — Display bouquet styles",
            "given": "Given the customer has configured Combos by Size.",
            "when": "When the customer reaches the bouquet style selection step.",
            "then": "Then the system displays bouquet styles with images."
          },
          {
            "title": "AC-02 — Select a bouquet style",
            "given": "Given the bouquet style list is displayed.",
            "when": "When the customer selects a bouquet style.",
            "then": "Then the system records exactly one valid bouquet style."
          },
          {
            "title": "AC-03 — Display Mockups",
            "given": "Given the customer reaches the Mockup selection step.",
            "when": "When the system loads the list.",
            "then": "Then only available Mockups from Core Database are displayed."
          },
          {
            "title": "AC-04 — Select a Mockup",
            "given": "Given the Mockup list is displayed.",
            "when": "When the customer selects a Mockup.",
            "then": "Then the system records exactly one Mockup."
          },
          {
            "title": "AC-05 — Require a Mockup",
            "given": "Given the customer has not selected a Mockup.",
            "when": "When the customer attempts to complete the request.",
            "then": "Then the system refuses to create the request and asks for a valid Mockup."
          }
        ],
        "rules": [
          {
            "id": "BR-269",
            "text": "The customer must select a valid bouquet style."
          },
          {
            "id": "BR-076",
            "text": "Only available Mockups from Core Database are displayed."
          },
          {
            "id": "BR-077",
            "text": "Each request is linked to only one Mockup."
          },
          {
            "id": "BR-078",
            "text": "A Mockup is required to complete the request."
          },
          {
            "id": "BR-026",
            "text": "The Mockup provides a reference for AI shape, composition or context."
          }
        ]
      },
      {
        "id": "US-A04",
        "featureGroup": "F01 — Initialize a flower design request",
        "title": "Customize wrapping paper and ribbon",
        "source": "Source: STORY-030",
        "story": "As a customer customizing a flower design, I want to select wrapping paper and ribbon, so that I can personalize the outer decoration of the bouquet to my preferences.",
        "criteria": [
          {
            "title": "AC-01 — Display wrapping paper",
            "given": "Given the customer is at the wrapping paper selection step.",
            "when": "When the system loads the data.",
            "then": "Then the system displays available wrapping papers."
          },
          {
            "title": "AC-02 — Select wrapping paper",
            "given": "Given the wrapping paper list is displayed.",
            "when": "When the customer selects wrapping paper.",
            "then": "Then the system records exactly one valid wrapping paper."
          },
          {
            "title": "AC-03 — Display ribbons",
            "given": "Given the customer is at the ribbon selection step.",
            "when": "When the system loads the data.",
            "then": "Then the system displays available ribbons."
          },
          {
            "title": "AC-04 — Select a ribbon",
            "given": "Given the ribbon list is displayed.",
            "when": "When the customer selects a ribbon.",
            "then": "Then the system records exactly one valid ribbon."
          },
          {
            "title": "AC-05 — Validate selections",
            "given": "Given the customer has not selected both valid wrapping paper and ribbon.",
            "when": "When the customer attempts to complete the request.",
            "then": "Then the system prevents request creation."
          }
        ],
        "rules": [
          {
            "id": "BR-270",
            "text": "The customer must select a valid wrapping paper."
          },
          {
            "id": "BR-271",
            "text": "The customer must select a valid ribbon."
          },
          {
            "id": "BR-024",
            "text": "Wrapping paper and ribbon are AI inputs in the defined priority order."
          }
        ]
      },
      {
        "id": "US-A05",
        "featureGroup": "F01 — Initialize a flower design request",
        "title": "Save a flower design request as a Draft",
        "source": "Source: STORY-030",
        "story": "As a customer who has completed a flower configuration, I want to save the flower design request as a Draft, so that I can preserve my customizations before actively requesting an AI image.",
        "criteria": [
          {
            "title": "AC-01 — Validate before saving",
            "given": "Given the customer has configured a flower design.",
            "when": "When the customer selects “Complete”.",
            "then": "Then the system revalidates the data and availability of the selections."
          },
          {
            "title": "AC-02 — Save the request",
            "given": "Given all data is valid.",
            "when": "When the customer completes the form.",
            "then": "Then the system creates a new request linked to the customer account."
          },
          {
            "title": "AC-03 — Initial status",
            "given": "Given the request has been saved successfully.",
            "when": "When the system initializes its status.",
            "then": "Then the request has the status “Draft”."
          },
          {
            "title": "AC-04 — Do not call AI automatically",
            "given": "Given a Draft request has just been saved.",
            "when": "When the system displays Request Details.",
            "then": "Then no AI Job has been created and AI Service has not been called automatically."
          },
          {
            "title": "AC-05 — View request details",
            "given": "Given the request has been saved successfully.",
            "when": "When Request Details is opened.",
            "then": "Then the system displays the saved configuration and the “Generate flower design with AI” function."
          },
          {
            "title": "AC-06 — Do not save invalid data",
            "given": "Given a configuration component is no longer available.",
            "when": "When the customer selects “Complete”.",
            "then": "Then the system does not create a new request."
          }
        ],
        "rules": [
          {
            "id": "BR-080",
            "text": "New requests have an initial status of Draft."
          },
          {
            "id": "BR-072",
            "text": "Each request belongs to a specific customer."
          },
          {
            "id": "BR-070",
            "text": "Save the source Combo and the Combo configuration by Size."
          },
          {
            "id": "BR-071",
            "text": "Each request stores only one Combo configuration by Size."
          }
        ]
      },
      {
        "id": "US-A06",
        "featureGroup": "F02 — Generate flower design images with AI",
        "title": "Generate a flower design image with AI",
        "source": "Source: STORY-033",
        "story": "As a customer with a valid flower design request, I want AI to generate an image from my selected configuration, so that I can visualize the design before deciding to place an order.",
        "criteria": [
          {
            "title": "AC-01 — Initialize AI generation",
            "given": "Given the customer is viewing a valid request.",
            "when": "When the customer selects “Generate AI bouquet now”.",
            "then": "Then the system checks ownership, data, availability and quota."
          },
          {
            "title": "AC-02 — Check quota",
            "given": "Given the customer has no AI quota remaining.",
            "when": "When the customer requests image generation.",
            "then": "Then the system does not create a new Job or deduct quota."
          },
          {
            "title": "AC-03 — Create an AI Job",
            "given": "Given the request is valid and quota remains.",
            "when": "When the system accepts the request.",
            "then": "Then the system creates one AI Job, saves a data snapshot and records one AI usage."
          },
          {
            "title": "AC-04 — AI input data",
            "given": "Given the request data is complete.",
            "when": "When the system builds the AI input.",
            "then": "Then the system uses the source Combo, Combo configuration by Size, Size, bouquet style, Mockup, wrapping paper and ribbon."
          },
          {
            "title": "AC-05 — Save the output image",
            "given": "Given the AI Job is processing.",
            "when": "When AI returns a valid image.",
            "then": "Then the system adds the logo, saves one image, creates one History item and updates the status to “Generated”."
          },
          {
            "title": "AC-06 — Handle failure",
            "given": "Given the AI Job has been accepted.",
            "when": "When AI fails to generate a valid image.",
            "then": "Then the system retries at most twice; if it still fails, it refunds one AI usage and creates no History item."
          }
        ],
        "rules": [
          {
            "id": "BR-020",
            "text": "Only valid requests owned by the current customer with remaining quota may generate images."
          },
          {
            "id": "BR-021",
            "text": "A maximum of 3 AI image generations per day per customer."
          },
          {
            "id": "BR-022",
            "text": "Each valid request uses one allowance; failed Jobs receive a refund."
          },
          {
            "id": "BR-023",
            "text": "AI uses the current request data."
          },
          {
            "id": "BR-024",
            "text": "Priority: Combo configuration by Size → Size → Bouquet style → Mockup → Wrapping paper and ribbon."
          },
          {
            "id": "BR-025",
            "text": "AI attempts to represent the correct flower components and quantities; the image is illustrative only."
          },
          {
            "id": "BR-027",
            "text": "Each successful generation produces one image."
          }
        ]
      },
      {
        "id": "US-A07",
        "featureGroup": "F02 — Generate flower design images with AI",
        "title": "Track AI image generation status",
        "source": "Source: STORY-033",
        "story": "As a customer using AI flower design generation, I want to track processing status, so that I know whether an image is being generated, is complete or has encountered an error.",
        "criteria": [
          {
            "title": "AC-01 — Processing status",
            "given": "Given the AI generation request has been accepted.",
            "when": "When the AI Job starts.",
            "then": "Then the Job status is updated to “Generating”."
          },
          {
            "title": "AC-02 — Prevent duplicate Jobs",
            "given": "Given the request already has a “Generating” Job.",
            "when": "When the customer submits another request.",
            "then": "Then the system does not create a new Job or deduct additional quota."
          },
          {
            "title": "AC-03 — Continue after leaving the page",
            "given": "Given the AI Job is running.",
            "when": "When the customer reloads or leaves the page.",
            "then": "Then the Job continues processing."
          },
          {
            "title": "AC-04 — Display status on return",
            "given": "Given the customer returns to the screen.",
            "when": "When the system loads the Job status.",
            "then": "Then the current status or final result is displayed."
          },
          {
            "title": "AC-05 — Update the final status",
            "given": "Given the AI Job has ended.",
            "when": "When the system determines the result.",
            "then": "Then the Job displays “Generated” on success or “Error” on failure."
          }
        ],
        "rules": [
          {
            "id": "BR-028",
            "text": "Each AI Job must have a status reflecting processing progress."
          },
          {
            "id": "BR-029",
            "text": "A request may have at most one running AI Job."
          },
          {
            "id": "BR-030",
            "text": "The Job continues running when the customer leaves the page."
          },
          {
            "id": "BR-022",
            "text": "Rejected requests do not deduct additional AI usage."
          }
        ]
      },
      {
        "id": "US-A08",
        "featureGroup": "F02 — Generate flower design images with AI",
        "title": "Regenerate an AI flower design image",
        "source": "Source: STORY-033",
        "story": "As a customer who has successfully generated an AI flower design image, I want to regenerate an image from the current request, so that I have more options before deciding to place an order.",
        "criteria": [
          {
            "title": "AC-01 — Display Regenerate",
            "given": "Given the request has a successful AI result.",
            "when": "When the customer views the result.",
            "then": "Then the system displays “Regenerate”."
          },
          {
            "title": "AC-02 — Check conditions",
            "given": "Given the customer selects “Regenerate”.",
            "when": "When the system receives the request.",
            "then": "Then the system checks ownership, source data, quota and Job status."
          },
          {
            "title": "AC-03 — Create a new result",
            "given": "Given the regeneration request is valid.",
            "when": "When AI successfully generates an image.",
            "then": "Then the system saves a new image and creates a new History item."
          },
          {
            "title": "AC-04 — Preserve previous results",
            "given": "Given the request has previous images.",
            "when": "When the system saves the new image.",
            "then": "Then previous results are not overwritten or deleted."
          },
          {
            "title": "AC-05 — Handle failure",
            "given": "Given the regeneration request has been accepted.",
            "when": "When the Job fails after retries.",
            "then": "Then the system refunds one AI usage and creates no History item."
          },
          {
            "title": "AC-06 — Quota exhausted",
            "given": "Given the customer has no AI quota remaining.",
            "when": "When the results screen is displayed.",
            "then": "Then the “Regenerate” button is disabled and a message is displayed."
          }
        ],
        "rules": [
          {
            "id": "BR-020",
            "text": "AI generation requests must be valid and have remaining quota."
          },
          {
            "id": "BR-021",
            "text": "A maximum of 3 generations per day."
          },
          {
            "id": "BR-022",
            "text": "Regeneration is a new generation and uses one AI allowance."
          },
          {
            "id": "BR-029",
            "text": "Multiple simultaneous Jobs for the same request are not allowed."
          },
          {
            "id": "BR-031",
            "text": "Each successful result is saved separately in history."
          }
        ]
      },
      {
        "id": "US-A09",
        "featureGroup": "F03 — View and manage AI results",
        "title": "View and manage AI result history",
        "source": "Source: STORY-040",
        "story": "As a customer who has initialized flower design requests, I want to view my requests and their AI image histories, so that I can track, revisit and continue using my generated flower designs.",
        "criteria": [
          {
            "title": "AC-01 — View the request list",
            "given": "Given the customer is signed in.",
            "when": "When the customer opens “Flower design requests”.",
            "then": "Then the system displays all requests owned by the account, including requests without a successful generation."
          },
          {
            "title": "AC-02 — Request information",
            "given": "Given a request may or may not have an AI Job.",
            "when": "When the list is displayed.",
            "then": "Then each request displays its latest Job status and the number of results with valid images."
          },
          {
            "title": "AC-03 — View history",
            "given": "Given a request has multiple AI images.",
            "when": "When the customer opens its details.",
            "then": "Then the system displays results belonging to that request, newest first."
          },
          {
            "title": "AC-04 — Sorting",
            "given": "Given there are multiple requests.",
            "when": "When the list is loaded.",
            "then": "Then the system sorts by the most recent generation, or by creation date if no generation exists."
          },
          {
            "title": "AC-05 — Access rights",
            "given": "Given a request or result belongs to another customer.",
            "when": "When it is accessed by ID or URL.",
            "then": "Then the system refuses access and returns no data or images."
          },
          {
            "title": "AC-06 — Missing image file",
            "given": "Given a History item exists but its file is unavailable.",
            "when": "When the customer views history.",
            "then": "Then the system retains the record, displays “Image no longer available” and does not break the entire list."
          }
        ],
        "rules": [
          {
            "id": "BR-095",
            "text": "Each request is a separate group containing AI results."
          },
          {
            "id": "BR-096",
            "text": "All requests belonging to the customer are displayed."
          },
          {
            "id": "BR-097",
            "text": "Only generations with a valid output image create a History item."
          },
          {
            "id": "BR-098",
            "text": "The list is sorted newest first according to the sorting rule."
          },
          {
            "id": "BR-099",
            "text": "Missing or corrupted image files do not delete History records."
          },
          {
            "id": "BR-100",
            "text": "Customers may only view their own data."
          }
        ]
      },
      {
        "id": "US-A10",
        "featureGroup": "F03 — View and manage AI results",
        "title": "Download a flower design image",
        "source": "Source: STORY-034",
        "story": "As a customer who has successfully generated an AI flower design image, I want to download the image to my device, so that I can save, reference or share the generated design.",
        "criteria": [
          {
            "title": "AC-01 — Display Download",
            "given": "Given the customer is viewing a valid AI result.",
            "when": "When the results screen is displayed.",
            "then": "Then the system displays a “Download” button."
          },
          {
            "title": "AC-02 — Check ownership",
            "given": "Given the customer selects image download.",
            "when": "When the system processes the request.",
            "then": "Then download is allowed only if the result belongs to the current customer."
          },
          {
            "title": "AC-03 — Format and quality",
            "given": "Given the image is ready.",
            "when": "When the customer downloads it.",
            "then": "Then the system provides a PNG file at the original resolution and quality, using the official image with the logo."
          },
          {
            "title": "AC-04 — Download from History",
            "given": "Given the customer has multiple successful results.",
            "when": "When the customer selects an older image from history.",
            "then": "Then download is allowed if the file is still available."
          },
          {
            "title": "AC-05 — No quota impact",
            "given": "Given the customer downloads an existing generated image.",
            "when": "When the system provides the file.",
            "then": "Then AI is not called again and no AI allowance is deducted."
          },
          {
            "title": "AC-06 — Unavailable file",
            "given": "Given the image is still generating or the file no longer exists.",
            "when": "When the customer requests a download.",
            "then": "Then the system does not provide the file and displays an appropriate message."
          }
        ],
        "rules": [
          {
            "id": "BR-058",
            "text": "Only results that are ready, exist and belong to the customer may be downloaded."
          },
          {
            "id": "BR-059",
            "text": "Download is shown only on result screens the customer is authorized to access."
          },
          {
            "id": "BR-060",
            "text": "Both new and older images in history may be downloaded."
          },
          {
            "id": "BR-061",
            "text": "Images are downloaded as PNG files at the original quality."
          },
          {
            "id": "BR-062",
            "text": "The downloaded image is the official image with the logo."
          },
          {
            "id": "BR-063",
            "text": "Filename pattern: mauhoa_[ma-ket-qua]_[yyyyMMdd_HHmmss].png."
          }
        ]
      }
    ]
  },
  {
    "group": "greeting",
    "title": "AI Greeting Card Creation User Stories",
    "items": [
      {
        "id": "US-B01",
        "featureGroup": "F01 — Configure cards at Checkout",
        "title": "Select a card type at Checkout",
        "source": "STORY-035",
        "story": "As a customer completing Checkout, I want to choose no card, a free card or a Custom card, so that I can select the card type that suits my flower order.",
        "criteria": [
          {
            "title": "AC-01 — Display card options",
            "given": "Given the customer is signed in and has a valid Checkout.",
            "when": "When the customer opens card configuration.",
            "then": "Then the system displays “With card” and “No card”, and allows a Free Card or Custom Card to be selected when the customer chooses With card."
          },
          {
            "title": "AC-02 — Choose no card",
            "given": "Given the customer is at Checkout.",
            "when": "When the customer selects “No card”.",
            "then": "Then the system does not require card information or add a card charge."
          },
          {
            "title": "AC-03 — Select a free card",
            "given": "Given the customer selects “Free Card”.",
            "when": "When the customer enters a valid greeting.",
            "then": "Then the system saves the card content to Checkout without applying Custom Card Size prices or surcharges."
          },
          {
            "title": "AC-04 — Select a Custom Card",
            "given": "Given the customer selects “Custom Card”.",
            "when": "When the system displays card configuration.",
            "then": "Then the customer can continue selecting the format, Size and Template and entering a greeting."
          },
          {
            "title": "AC-05 — Change the card selection",
            "given": "Given Checkout already has a card selection.",
            "when": "When the customer selects another card.",
            "then": "Then the new selection replaces the current Checkout selection without deleting existing card data from History."
          }
        ],
        "rules": [
          {
            "id": "BR-051",
            "text": "Required content: When selecting a card, the customer must enter valid card content/a greeting. Separate Sender or Recipient fields are not required."
          },
          {
            "id": "BR-053",
            "text": "One card in Checkout: Each Checkout has at most one card selection at a time."
          },
          {
            "id": "BR-056",
            "text": "Ownership: Customers may only configure and attach cards to Checkouts belonging to their own account."
          }
        ]
      },
      {
        "id": "US-B02",
        "featureGroup": "F01 — Configure cards at Checkout",
        "title": "Configure a Custom Card by format, Size and Template",
        "source": "STORY-035",
        "story": "As a customer who has selected a Custom Card, I want to choose Printed or Handwritten format, Size and Template, so that I can personalize the greeting card design and presentation.",
        "criteria": [
          {
            "title": "AC-01 — Select the card format",
            "given": "Given the customer has selected a Custom Card.",
            "when": "When the system displays card configuration.",
            "then": "Then the system allows Printed or Handwritten format to be selected."
          },
          {
            "title": "AC-02 — Select Size and Template",
            "given": "Given the customer is configuring a Custom Card.",
            "when": "When the system loads the options.",
            "then": "Then the system displays available Sizes and Templates for the selected format."
          },
          {
            "title": "AC-03 — Enter a greeting",
            "given": "Given the customer has selected the design information.",
            "when": "When the customer enters card content.",
            "then": "Then the system validates the content against the applicable word limit."
          },
          {
            "title": "AC-04 — Check availability",
            "given": "Given the Template or Size is inactive or soft-deleted.",
            "when": "When the customer saves the configuration.",
            "then": "Then the system refuses and asks the customer to select an available Template or Size."
          },
          {
            "title": "AC-05 — Validate required data",
            "given": "Given the customer is missing a format, Size, Template or valid greeting.",
            "when": "When the customer saves the configuration.",
            "then": "Then the system displays an error and does not save the invalid configuration."
          }
        ],
        "rules": [
          {
            "id": "BR-051",
            "text": "Card content: A greeting is required and must comply with the word limit."
          },
          {
            "id": "BR-053",
            "text": "One card selection: Checkout has only one card selection at a time."
          },
          {
            "id": "BR-056",
            "text": "Ownership: Card configuration may only be updated in a Checkout belonging to the current account."
          }
        ]
      },
      {
        "id": "US-B03",
        "featureGroup": "F01 — Configure cards at Checkout",
        "title": "Attach an image to a Custom Card",
        "source": "STORY-035",
        "story": "As a customer designing a Custom Card, I want to attach a personal image, so that I can add visual content to the AI card design.",
        "criteria": [
          {
            "title": "AC-01 — Allow an image attachment",
            "given": "Given the customer is configuring a Custom Card.",
            "when": "When the customer selects an image attachment.",
            "then": "Then the system accepts at most one valid image."
          },
          {
            "title": "AC-02 — Validate the format",
            "given": "Given the customer selects an image file.",
            "when": "When the file is neither PNG nor JPG.",
            "then": "Then the system rejects the file and displays an invalid-file message."
          },
          {
            "title": "AC-03 — Validate file size",
            "given": "Given the customer uploads an image.",
            "when": "When the file exceeds 10 MB.",
            "then": "Then the system rejects it and allows another image to be selected."
          },
          {
            "title": "AC-04 — Attachment is optional",
            "given": "Given all required Custom Card information is valid.",
            "when": "When the customer does not attach an image.",
            "then": "Then the system still allows the card configuration to be saved."
          }
        ],
        "rules": [
          {
            "id": "BR-052",
            "text": "Attached image: At most one PNG/JPG image, no larger than 10 MB."
          },
          {
            "id": "BR-056",
            "text": "Ownership: Images and card configuration may only be attached to a valid Checkout belonging to the current customer."
          }
        ]
      },
      {
        "id": "US-B04",
        "featureGroup": "F01 — Configure cards at Checkout",
        "title": "Calculate the price and save card configuration to Checkout",
        "source": "STORY-035",
        "story": "As a customer who has completed card configuration, I want the system to calculate the price and save the card to Checkout, so that I know the cost before confirming payment.",
        "criteria": [
          {
            "title": "AC-01 — Price a Printed Custom Card",
            "given": "Given the customer has a valid Printed Custom Card configuration.",
            "when": "When the system calculates the card price.",
            "then": "Then the card price equals the current price of the selected Size."
          },
          {
            "title": "AC-02 — Price a Handwritten Custom Card",
            "given": "Given the customer has a valid Handwritten Custom Card configuration.",
            "when": "When the system calculates the price.",
            "then": "Then the card price equals the Size price plus the Active handwriting surcharge for the word count."
          },
          {
            "title": "AC-03 — Save the configuration",
            "given": "Given the card data and price are valid.",
            "when": "When the customer saves the configuration.",
            "then": "Then the system saves the card type, content, format, Size, Template, optional image attachment, price and pricing word count to Checkout."
          },
          {
            "title": "AC-04 — Update the subtotal",
            "given": "Given the system has calculated a valid card price.",
            "when": "When the card configuration is saved.",
            "then": "Then the system includes the card price in the Checkout subtotal."
          },
          {
            "title": "AC-05 — Do not generate an AI image yet",
            "given": "Given the Custom Card configuration has been saved successfully.",
            "when": "When the customer continues Checkout.",
            "then": "Then the system creates no AI Job, image or History record and deducts no quota."
          }
        ],
        "rules": [
          {
            "id": "BR-054",
            "text": "Pricing: Printed Card = Size price; Handwritten Card = Size price + handwriting surcharge by word count."
          },
          {
            "id": "BR-051",
            "text": "Greeting limit: Content must meet the applicable word limit."
          },
          {
            "id": "BR-053",
            "text": "One card in Checkout: Only one card selection is saved at a time."
          },
          {
            "id": "BR-056",
            "text": "Ownership: Checkout must belong to the current customer."
          }
        ]
      },
      {
        "id": "US-B05",
        "featureGroup": "F02 — Generate cards with AI",
        "title": "Pay for the order to enable Custom Card generation",
        "source": "STORY-039",
        "story": "As a customer who has configured a Custom Card, I want to complete Checkout and pay for my order, so that I can confirm the order and continue generating an AI card image.",
        "criteria": [
          {
            "title": "AC-01 — Create an Order",
            "given": "Given Checkout belongs to the current customer and contains valid data.",
            "when": "When the customer selects “Complete Checkout”.",
            "then": "Then the system creates exactly one Order from Checkout."
          },
          {
            "title": "AC-02 — Save a configuration snapshot",
            "given": "Given Checkout contains a new Custom Card.",
            "when": "When the Order is created.",
            "then": "Then the system saves a snapshot of the card content, Size, format, Template, price and paid word count."
          },
          {
            "title": "AC-03 — Payment has not succeeded",
            "given": "Given the Order has no verified Payment SUCCESS.",
            "when": "When the customer attempts to generate a Custom Card with AI.",
            "then": "Then the system refuses and creates no AI Job, image or History record."
          },
          {
            "title": "AC-04 — Successful payment",
            "given": "Given the Order contains a new Custom Card configuration.",
            "when": "When the system verifies Payment SUCCESS.",
            "then": "Then the system allows the customer to continue to Custom Card generation after payment."
          },
          {
            "title": "AC-05 — Failed payment",
            "given": "Given the Order has been created.",
            "when": "When Payment is determined to be FAILED.",
            "then": "Then the system does not allow Custom Card generation or create an AI Job."
          },
          {
            "title": "AC-06 — Prevent duplicate Orders",
            "given": "Given Checkout has already created an Order successfully.",
            "when": "When the Checkout completion request is sent again.",
            "then": "Then the system does not create another Order for the same Checkout."
          }
        ],
        "rules": [
          {
            "id": "BR-087",
            "text": "Order creation timing: An Order is created only after the customer completes Checkout and the backend confirms the final conditions."
          },
          {
            "id": "BR-088",
            "text": "Initial status: New Orders are PENDING until payment is verified or the Order is canceled."
          },
          {
            "id": "BR-090",
            "text": "Payment retry: Customers may retry payment while the Order remains PENDING and has not expired."
          },
          {
            "id": "BR-091",
            "text": "Order cancellation: Orders without successful payment after 24 hours are canceled according to the rule."
          },
          {
            "id": "BR-092",
            "text": "Final pricing: The backend calculates the final total when Checkout is completed."
          },
          {
            "id": "BR-094",
            "text": "Card configuration after Order creation: Customers cannot change or remove the card selection once the Order is created."
          }
        ]
      },
      {
        "id": "US-B06",
        "featureGroup": "F02 — Generate cards with AI",
        "title": "Generate a Custom Card image with AI after payment",
        "source": "STORY-035, STORY-039, STORY-036; BR-048, BR-154",
        "note": "This story is a proposed synthesis of related business conditions. A standalone source User Story fully specifying the first generation has not been verified.",
        "story": "As a customer who has successfully paid for an order with a Custom Card, I want AI to generate a card image from the paid configuration, so that I can preview the design before confirming the card.",
        "criteria": [
          {
            "title": "AC-01 — Card generation conditions",
            "given": "Given the Order belongs to the current customer, contains a new Custom Card and has verified Payment SUCCESS.",
            "when": "When the customer continues to card generation.",
            "then": "Then the system allows generation if the configuration and quota remain valid."
          },
          {
            "title": "AC-02 — Check quota",
            "given": "Given the customer has exhausted the daily quota or the generation limit for the source flower design.",
            "when": "When the customer submits a card generation request.",
            "then": "Then the system does not create a new AI Job."
          },
          {
            "title": "AC-03 — Create an AI Job",
            "given": "Given the request is valid and usage remains.",
            "when": "When the system accepts the request.",
            "then": "Then the system creates an AI Job and records one usage against both the daily quota and source flower design limit."
          },
          {
            "title": "AC-04 — Use the card configuration",
            "given": "Given the Order has a valid Custom Card configuration snapshot.",
            "when": "When the system sends the image generation request to AI.",
            "then": "Then the system uses the Template, Size, format, greeting content and optional image attachment."
          },
          {
            "title": "AC-05 — Handle content by format",
            "given": "Given the customer selects Typed or Calligraphy format.",
            "when": "When AI generates the card image.",
            "then": "Then Typed format must display the greeting verbatim; Calligraphy is not required to render the greeting on the image."
          },
          {
            "title": "AC-06 — Save the result",
            "given": "Given AI generates a valid output image.",
            "when": "When the system completes processing.",
            "then": "Then the system saves the official PNG image without a logo and creates the corresponding History record."
          }
        ],
        "rules": [
          {
            "id": "BR-048",
            "text": "Card generation quota: A maximum of 10 generations per day and 3 per source flower design; both limits apply simultaneously."
          },
          {
            "id": "BR-055",
            "text": "Duplicate requests: A valid request must not create multiple AI Jobs, images, History records or quota usages."
          },
          {
            "id": "BR-154",
            "text": "Content by format: Typed Cards must include the greeting verbatim; Calligraphy need not render the greeting on the image."
          },
          {
            "id": "BR-156",
            "text": "Flower design limit: Card generation must follow the 3-generation limit per flower design within the defined business scope."
          },
          {
            "id": "BR-272",
            "text": "Content editing: Edited content must not exceed the paid word count."
          }
        ]
      },
      {
        "id": "US-B07",
        "featureGroup": "F02 — Generate cards with AI",
        "title": "Regenerate and confirm a Custom Card image",
        "source": "STORY-036",
        "story": "As a customer in the Custom Card generation step after successful payment, I want to regenerate the card image when I am not satisfied, so that I can select a suitable design before confirmation.",
        "criteria": [
          {
            "title": "AC-01 — Display Regenerate",
            "given": "Given the Order has a new Custom Card, Payment SUCCESS and meets generation conditions.",
            "when": "When the customer views a card result in the post-payment generation step.",
            "then": "Then the system displays “Regenerate”."
          },
          {
            "title": "AC-02 — Create a new Job",
            "given": "Given the customer has daily quota and flower design generations remaining.",
            "when": "When the customer selects “Regenerate”.",
            "then": "Then the system creates a new AI Job and records one usage against both limits."
          },
          {
            "title": "AC-03 — Limit greeting edits",
            "given": "Given the customer edits the greeting before regeneration.",
            "when": "When the new word count does not exceed the paid word count.",
            "then": "Then the system allows continuation if all other conditions are valid."
          },
          {
            "title": "AC-04 — Do not change Template or Size",
            "given": "Given the customer is in post-payment regeneration.",
            "when": "When the configuration screen is displayed.",
            "then": "Then the system does not allow the paid Template or Size to be changed."
          },
          {
            "title": "AC-05 — Save a new result",
            "given": "Given the regeneration request has been accepted.",
            "when": "When AI returns a valid image.",
            "then": "Then the system saves a PNG without a logo and creates a new History record."
          },
          {
            "title": "AC-06 — Refund quota on failure",
            "given": "Given the regeneration Job has recorded quota usage.",
            "when": "When AI fails after all retries.",
            "then": "Then the system creates no new History record and refunds one usage against both limits."
          },
          {
            "title": "AC-07 — No regeneration from History",
            "given": "Given the customer is viewing History or an older card detail page.",
            "when": "When the customer looks for or sends a regeneration request.",
            "then": "Then the system does not display the function and the backend must reject the request."
          }
        ],
        "rules": [
          {
            "id": "BR-044",
            "text": "Regeneration scope: Regeneration is only allowed in Custom Card creation after Payment SUCCESS, never from History."
          },
          {
            "id": "BR-048",
            "text": "Quota: Regeneration counts as a new generation."
          },
          {
            "id": "BR-154",
            "text": "Content by format: The new image must follow the greeting display rules."
          },
          {
            "id": "BR-156",
            "text": "Flower design limit: Regeneration still counts against the generation limit for the flower design."
          },
          {
            "id": "BR-272",
            "text": "Paid word count: The greeting word count must not exceed the paid allowance."
          }
        ]
      },
      {
        "id": "US-B08",
        "featureGroup": "F03 — View and manage card results",
        "title": "View AI card generation history",
        "source": "STORY-045",
        "story": "As a customer who has used AI card generation, I want to view my generated cards and their details, so that I can revisit designs and access the actions still permitted.",
        "criteria": [
          {
            "title": "AC-01 — Display History",
            "given": "Given the customer has successfully generated AI cards.",
            "when": "When the customer opens “Designed cards”.",
            "then": "Then the system displays cards with images belonging to the customer, newest first."
          },
          {
            "title": "AC-02 — Do not save failed results",
            "given": "Given a generation produces no valid output image.",
            "when": "When the Job ends.",
            "then": "Then the system creates no History item for that generation."
          },
          {
            "title": "AC-03 — View card details",
            "given": "Given the customer selects a card belonging to their account.",
            "when": "When the card detail page is opened.",
            "then": "Then the system displays the image, card information and related Orders if any."
          },
          {
            "title": "AC-04 — Card linked to multiple Orders",
            "given": "Given a card is used in multiple Orders.",
            "when": "When the customer views History.",
            "then": "Then the system displays only one original History item and may show the linked Orders."
          },
          {
            "title": "AC-05 — Unavailable file",
            "given": "Given the History record exists but the image file is missing or inaccessible.",
            "when": "When the customer views card details.",
            "then": "Then the system retains the record and displays “Image no longer available”."
          },
          {
            "title": "AC-06 — Access rights",
            "given": "Given the card belongs to another customer.",
            "when": "When the user accesses it by ID or URL.",
            "then": "Then the backend refuses and returns no image or metadata."
          }
        ],
        "rules": [
          {
            "id": "BR-044",
            "text": "No regeneration from History: History supports only permitted actions, not regeneration from old results."
          },
          {
            "id": "BR-048",
            "text": "Quota: Viewing history does not generate usage."
          },
          {
            "id": "BR-053",
            "text": "Card selection: A Checkout uses only one card at a time; managing History does not change this limit."
          },
          {
            "id": "BR-133–BR-139",
            "text": "Detailed display and history retention rules are referenced in STORY-045."
          }
        ]
      },
      {
        "id": "US-B09",
        "featureGroup": "F03 — View and manage card results",
        "title": "Select an existing card from History for Checkout",
        "source": "STORY-042",
        "story": "As a customer completing Checkout, I want to select a previously generated AI card from history, so that I can reuse an existing design without generating a new image.",
        "criteria": [
          {
            "title": "AC-01 — Display eligible cards",
            "given": "Given Checkout belongs to the current customer and has a valid source flower design.",
            "when": "When the customer opens “Select a card from history”.",
            "then": "Then the system displays only cards owned by the customer with valid images, generated from the same flower design as Checkout."
          },
          {
            "title": "AC-02 — Select an existing card",
            "given": "Given the customer selects a valid History card.",
            "when": "When the system successfully validates it.",
            "then": "Then the card is attached to Checkout and displayed in Order Summary."
          },
          {
            "title": "AC-03 — Replace the current card",
            "given": "Given Checkout currently selects card A.",
            "when": "When the customer selects valid card B.",
            "then": "Then B replaces A in Checkout, while A remains in History."
          },
          {
            "title": "AC-04 — Do not call AI",
            "given": "Given the customer selects an existing card from History.",
            "when": "When the system attaches the card to Checkout.",
            "then": "Then AI is not called, the image is not copied, no new History item is created and quota is not deducted."
          },
          {
            "title": "AC-05 — Reuse a card",
            "given": "Given the card was linked to another Order but remains valid for the current flower design.",
            "when": "When the customer selects the card again.",
            "then": "Then the system allows reuse without changing previous Orders."
          },
          {
            "title": "AC-06 — Reject invalid cards",
            "given": "Given the card is not owned by the customer, does not match the flower design or has an unavailable image file.",
            "when": "When the customer attempts to select the card.",
            "then": "Then the backend rejects it and does not attach the card to Checkout."
          }
        ],
        "rules": [
          {
            "id": "BR-053",
            "text": "One card in Checkout: The new selection replaces the current card selection."
          },
          {
            "id": "BR-056",
            "text": "Ownership: Checkout must belong to the current customer."
          },
          {
            "id": "BR-044",
            "text": "Regeneration scope: Selecting a card from History is not generation and does not support regeneration from History."
          },
          {
            "id": "BR-048",
            "text": "Quota: Reusing a card does not change quota."
          },
          {
            "id": "BR-110–BR-117",
            "text": "Direct rules for selecting History cards are referenced in STORY-042."
          }
        ]
      },
      {
        "id": "US-B10",
        "featureGroup": "F03 — View and manage card results",
        "title": "Download an AI card image",
        "source": "STORY-041",
        "story": "As a customer with a successfully generated AI card, I want to download the card image to my device, so that I can save or use the design outside the system.",
        "criteria": [
          {
            "title": "AC-01 — Download from History",
            "given": "Given the card belongs to the customer and its image file is available.",
            "when": "When the customer selects “Download card” from History.",
            "then": "Then the system returns the saved PNG file named thiep_[ma-thiep]_[yyyyMMdd_HHmmss].png."
          },
          {
            "title": "AC-02 — Download from an Order",
            "given": "Given the Order belongs to the customer and is linked to a valid card.",
            "when": "When the customer downloads the card from Order Details.",
            "then": "Then the system returns the correct PNG file named thiep_[ma-don-hang]_[yyyyMMdd_HHmmss].png."
          },
          {
            "title": "AC-03 — Do not generate a new image",
            "given": "Given the customer downloads an already generated card.",
            "when": "When the system provides the file.",
            "then": "Then the system does not call AI, create a new image or create a new History item."
          },
          {
            "title": "AC-04 — No quota impact",
            "given": "Given the customer has remaining or exhausted AI quota.",
            "when": "When the customer downloads or re-downloads a valid card.",
            "then": "Then quota remains unchanged and does not prevent the download."
          },
          {
            "title": "AC-05 — Repeated downloads",
            "given": "Given the card image remains available.",
            "when": "When the customer downloads the same card again.",
            "then": "Then the system continues returning the correct saved result file."
          },
          {
            "title": "AC-06 — Unavailable file",
            "given": "Given the History record still exists but the image is missing or inaccessible.",
            "when": "When the customer requests a download.",
            "then": "Then the system returns no file, retains the History record and displays “Image no longer available”."
          },
          {
            "title": "AC-07 — Check ownership",
            "given": "Given the card belongs to another account or is not linked to the Order being viewed.",
            "when": "When the user submits a file download request.",
            "then": "Then the backend refuses and provides neither the file nor a storage URL."
          }
        ],
        "rules": [
          {
            "id": "BR-048",
            "text": "Quota: Downloading does not count as generation."
          },
          {
            "id": "BR-044",
            "text": "Image generation scope: Downloading is not regeneration and must not create an AI Job."
          },
          {
            "id": "BR-101–BR-109",
            "text": "Specific download rules are referenced in STORY-041."
          }
        ]
      }
    ]
  },
  {
    group: 'admin',
    "title": "Admin Management User Stories",
    "items": [
      {
        "id": "US-C01",
        "featureGroup": "F01 — Flower AI Configuration Management",
        "title": "Manage flower Mockups",
        "source": "STORY-050, STORY-051, STORY-052, STORY-053",
        "story": "As an Admin authorized to manage Mockups, I want to add, view and manage flower Mockup statuses, so that I can maintain the available Mockup list for customers customizing and generating AI flower images.",
        "criteria": [
          {
            "title": "AC-01 — View the Mockup list",
            "given": "Given the Admin has permission to manage Mockups.",
            "when": "When the Admin accesses Mockup Management.",
            "then": "Then the system displays the Mockup list and corresponding statuses."
          },
          {
            "title": "AC-02 — Add a Mockup",
            "given": "Given the Admin is in Mockup Management.",
            "when": "When the Admin enters a valid name and uploads a PNG/JPG Mockup image no larger than 10 MB.",
            "then": "Then the system displays an image Preview and allows the new Mockup to be saved if the data is valid."
          },
          {
            "title": "AC-03 — Validate required Mockup data",
            "given": "Given the Admin is adding a Mockup.",
            "when": "When the name is blank, exceeds 50 characters or the image is invalid.",
            "then": "Then the system refuses to create the Mockup and displays an error."
          },
          {
            "title": "AC-04 — Change Mockup status",
            "given": "Given the Mockup is Active or Inactive.",
            "when": "When the Admin confirms the status change.",
            "then": "Then the system saves the new status to Core Database."
          },
          {
            "title": "AC-05 — Customer impact",
            "given": "Given the Mockup has been set to Inactive.",
            "when": "When a customer opens the Mockup selection step.",
            "then": "Then that Mockup is absent from the available list."
          },
          {
            "title": "AC-06 — Delete a Mockup",
            "given": "Given the Mockup has not been soft-deleted.",
            "when": "When the Admin confirms deletion.",
            "then": "Then the system sets isDelete = true and removes the Mockup from the default list."
          }
        ],
        "rules": [
          {
            "id": "BR-163",
            "text": "Access to Mockup management."
          },
          {
            "id": "BR-164–BR-168",
            "text": "Rules for adding Mockups, input data and images."
          },
          {
            "id": "BR-169–BR-175",
            "text": "Mockup status management rules."
          },
          {
            "id": "BR-176, BR-181–BR-186",
            "text": "Mockup deletion rules."
          }
        ]
      },
      {
        "id": "US-C02",
        "featureGroup": "F01 — Flower AI Configuration Management",
        "title": "Manage Custom AI flower Size configurations",
        "source": "STORY-079, STORY-080, STORY-081, STORY-082, STORY-083",
        "story": "As an Admin authorized to manage AI Custom data, I want to set up and manage Size configurations and their Combo quantities, so that I can control which flower configurations customers may use.",
        "criteria": [
          {
            "title": "AC-01 — View Size configurations",
            "given": "Given the Admin has permission to manage Size configurations.",
            "when": "When the Admin opens Custom AI Flower Size Management.",
            "then": "Then the system displays Size, Combo quantity, status and management actions."
          },
          {
            "title": "AC-02 — Add a Size configuration",
            "given": "Given the Admin is adding a Size configuration.",
            "when": "When the Admin enters a valid Size and a positive integer Combo quantity.",
            "then": "Then the system creates a configuration with default status Inactive."
          },
          {
            "title": "AC-03 — Validate Combo quantity",
            "given": "Given the Admin enters a Combo quantity below 1 or a non-integer.",
            "when": "When the Admin selects Save.",
            "then": "Then the system refuses to create or update the configuration."
          },
          {
            "title": "AC-04 — Update a Size configuration",
            "given": "Given the Size configuration exists.",
            "when": "When the Admin updates the Size or Combo quantity with valid values.",
            "then": "Then the system saves the new data and retains the current Active/Inactive status."
          },
          {
            "title": "AC-05 — Prevent duplicate Sizes",
            "given": "Given the Admin enters a Size already present in a non-deleted record.",
            "when": "When the Admin selects Save.",
            "then": "Then the system rejects the update and reports that the Size already exists."
          },
          {
            "title": "AC-06 — Change Size configuration status",
            "given": "Given the Size configuration is Active or Inactive.",
            "when": "When the Admin performs a valid status change.",
            "then": "Then the system updates the status as requested."
          }
        ],
        "rules": [
          {
            "id": "BR-273",
            "text": "Custom AI Flower Size configuration: Management, data validation and configuration status rules."
          }
        ],
        "rulesNote": "Creation, update, deletion and status-change conditions are detailed in STORY-079 through STORY-083."
      },
      {
        "id": "US-C03",
        "featureGroup": "F01 — Flower AI Configuration Management",
        "title": "Manage flower wrapping style images",
        "source": "STORY-074, STORY-075, STORY-076, STORY-077, STORY-078",
        "story": "As an Admin authorized to manage AI Custom data, I want to manage flower wrapping style images, so that I can provide valid wrapping options for flower customization.",
        "criteria": [
          {
            "title": "AC-01 — View wrapping style images",
            "given": "Given the Admin has permission to manage wrapping style images.",
            "when": "When the Admin opens the wrapping style image list.",
            "then": "Then the system displays records and their management information."
          },
          {
            "title": "AC-02 — Add a wrapping style image",
            "given": "Given the Admin opens the add function.",
            "when": "When the Admin provides valid data and selects Save.",
            "then": "Then the system creates a wrapping style image record."
          },
          {
            "title": "AC-03 — Validate wrapping image data",
            "given": "Given required information is invalid.",
            "when": "When the Admin selects Save.",
            "then": "Then the system does not create a new record."
          },
          {
            "title": "AC-04 — Update a wrapping image",
            "given": "Given the wrapping style image exists.",
            "when": "When the Admin edits information or replaces the Preview with a valid image.",
            "then": "Then the system saves the new data and displays the updated Preview."
          },
          {
            "title": "AC-05 — Manage wrapping image status",
            "given": "Given a wrapping style image is Active or Inactive.",
            "when": "When the Admin performs a valid status transition.",
            "then": "Then the system updates the corresponding status."
          },
          {
            "title": "AC-06 — Delete a wrapping image",
            "given": "Given the wrapping style image is no longer needed.",
            "when": "When the Admin performs and confirms a valid deletion.",
            "then": "Then the system handles deletion using the prescribed data management mechanism."
          }
        ],
        "rules": [
          {
            "id": "BR-274",
            "text": "Wrapping style image management rules."
          },
          {
            "id": "BR-275",
            "text": "Wrapping style image information update rules."
          },
          {
            "id": "BR-277",
            "text": "Wrapping style image availability status rules."
          }
        ]
      },
      {
        "id": "US-C04",
        "featureGroup": "F01 — Flower AI Configuration Management",
        "title": "Manage flower customization data availability",
        "source": "STORY-052, STORY-053, STORY-078, STORY-082, STORY-083",
        "note": "This composite story combines status management and deletion functions to clarify how Admin actions affect the customer experience. Its scope overlaps detailed configuration stories and should not automatically be counted as an independent development item.",
        "story": "As an Admin managing Custom AI flower configurations, I want to control configuration data availability, so that customers cannot use options that have been discontinued.",
        "criteria": [
          {
            "title": "AC-01 — Deactivate a configuration",
            "given": "Given the Admin changes a configuration to Inactive.",
            "when": "When the system saves the new status.",
            "then": "Then the configuration is no longer available for new customization requests under the rules for that data type."
          },
          {
            "title": "AC-02 — Reactivate a configuration",
            "given": "Given the configuration is Inactive and eligible for activation.",
            "when": "When the Admin changes it to Active.",
            "then": "Then the system records Active status."
          },
          {
            "title": "AC-03 — Delete a configuration",
            "given": "Given the Admin is authorized and the record may be deleted.",
            "when": "When the Admin confirms the deletion.",
            "then": "Then the system uses the deletion mechanism prescribed for the configuration type."
          },
          {
            "title": "AC-04 — Check configuration permissions",
            "given": "Given the user has no configuration management permission.",
            "when": "When the user submits a status-change or deletion request.",
            "then": "Then the backend must reject the action."
          }
        ],
        "rules": [
          {
            "id": "BR-169–BR-175",
            "text": "Mockup status management."
          },
          {
            "id": "BR-176, BR-181–BR-186",
            "text": "Mockup deletion management."
          },
          {
            "id": "BR-273",
            "text": "Custom AI Flower Size configuration management."
          },
          {
            "id": "BR-274, BR-277",
            "text": "Wrapping style image and status management."
          }
        ]
      },
      {
        "id": "US-C05",
        "featureGroup": "F02 — Greeting Card Configuration Management",
        "title": "Manage card sizes",
        "source": "STORY-054, STORY-055, STORY-056, STORY-062, STORY-063",
        "story": "As an Admin authorized to manage card configurations, I want to manage card dimensions, prices and word limits, so that I can provide valid Size choices and support accurate pricing.",
        "criteria": [
          {
            "title": "AC-01 — View card Sizes",
            "given": "Given the Admin has permission to manage card configurations.",
            "when": "When the Admin opens the card size list.",
            "then": "Then the system displays sizes and their configuration information."
          },
          {
            "title": "AC-02 — Add a card size",
            "given": "Given the Admin is adding a new Size.",
            "when": "When the Admin enters valid dimensions, Size price and maximum word count.",
            "then": "Then the system saves the new configuration to Core Database with status Active and isDelete = false."
          },
          {
            "title": "AC-03 — Validate card Size price",
            "given": "Given the Admin enters a negative Size price.",
            "when": "When the Admin selects Save.",
            "then": "Then the system refuses to save."
          },
          {
            "title": "AC-04 — Validate maximum word count",
            "given": "Given the Admin enters a maximum word count of zero or below.",
            "when": "When the Admin selects Save.",
            "then": "Then the system refuses to save."
          },
          {
            "title": "AC-05 — Update a card size",
            "given": "Given a card size exists.",
            "when": "When the Admin updates it with valid data.",
            "then": "Then the system saves the updated information under current rules."
          },
          {
            "title": "AC-06 — Manage card size status",
            "given": "Given the card size is Active or Inactive.",
            "when": "When the Admin confirms the status change.",
            "then": "Then the system updates the new status."
          }
        ],
        "rules": [
          {
            "id": "BR-191–BR-193",
            "text": "Card size creation and data validation rules."
          },
          {
            "id": "BR-223–BR-227",
            "text": "Card size status management rules."
          },
          {
            "id": "BR-250",
            "text": "Additional card size configuration rules."
          }
        ]
      },
      {
        "id": "US-C06",
        "featureGroup": "F02 — Greeting Card Configuration Management",
        "title": "Manage Custom AI card Templates",
        "source": "STORY-057, STORY-058, STORY-059, STORY-060, STORY-065",
        "story": "As an Admin authorized to manage card templates, I want to add, update and manage Custom AI card Templates, so that I can maintain a design library for customers to choose from.",
        "criteria": [
          {
            "title": "AC-01 — View the Template list",
            "given": "Given the Admin has permission to manage card templates.",
            "when": "When the Admin accesses the card template list.",
            "then": "Then the system displays templates with their information and management statuses."
          },
          {
            "title": "AC-02 — Add a Template",
            "given": "Given the Admin is adding a card template.",
            "when": "When the Admin enters a name of at most 100 characters, a description of at most 200 characters and uploads a valid Preview image.",
            "then": "Then the system saves the template with default status Active and isDelete = false."
          },
          {
            "title": "AC-03 — Validate the Template image",
            "given": "Given the Admin uploads a Template image.",
            "when": "When the file is not PNG/JPG or exceeds 10 MB.",
            "then": "Then the system rejects the file."
          },
          {
            "title": "AC-04 — Update a Template",
            "given": "Given a Template exists.",
            "when": "When the Admin edits valid information and selects Save.",
            "then": "Then the system updates the data in Core Database."
          },
          {
            "title": "AC-05 — Keep the current image",
            "given": "Given the Template already has a Preview image.",
            "when": "When the Admin updates information without selecting a new image.",
            "then": "Then the system retains the current image."
          },
          {
            "title": "AC-06 — Change Template status",
            "given": "Given the Template is Active or Inactive.",
            "when": "When the Admin confirms the status change.",
            "then": "Then the system updates the corresponding status."
          },
          {
            "title": "AC-07 — Delete a Template",
            "given": "Given the Template has not been soft-deleted.",
            "when": "When the Admin performs and confirms deletion.",
            "then": "Then the system handles deletion under the rules and excludes deleted templates from the default list."
          }
        ],
        "rules": [
          {
            "id": "BR-201–BR-204",
            "text": "Add card templates and validate input data."
          },
          {
            "id": "BR-205–BR-209",
            "text": "Template status management."
          },
          {
            "id": "BR-210–BR-214",
            "text": "Template deletion and data preservation."
          },
          {
            "id": "BR-232–BR-236",
            "text": "Template updates."
          },
          {
            "id": "BR-251, BR-252",
            "text": "Additional card template management rules."
          }
        ]
      },
      {
        "id": "US-C07",
        "featureGroup": "F02 — Greeting Card Configuration Management",
        "title": "Manage handwritten card surcharge configurations",
        "source": "STORY-061, STORY-064, STORY-066, STORY-067, STORY-068",
        "story": "As an Admin authorized to manage card pricing, I want to set handwriting surcharges by word-count range, so that card prices correctly reflect the customer greeting content.",
        "criteria": [
          {
            "title": "AC-01 — View handwriting surcharges",
            "given": "Given the Admin has permission to manage card pricing.",
            "when": "When the Admin opens the handwriting surcharge configuration list.",
            "then": "Then the system displays word-count ranges, surcharges and statuses."
          },
          {
            "title": "AC-02 — Add a surcharge configuration",
            "given": "Given the Admin is adding a surcharge.",
            "when": "When the Admin enters a valid starting word count, ending word count, price and status.",
            "then": "Then the system creates a new configuration in Core Database."
          },
          {
            "title": "AC-03 — Validate the word-count range",
            "given": "Given the starting word count exceeds the ending word count.",
            "when": "When the Admin selects Save.",
            "then": "Then the system refuses to create or update."
          },
          {
            "title": "AC-04 — Check for overlapping ranges",
            "given": "Given the new configuration is Active.",
            "when": "When its word-count range overlaps another Active configuration.",
            "then": "Then the system rejects the overlapping configuration."
          },
          {
            "title": "AC-05 — Update a surcharge",
            "given": "Given the surcharge configuration exists.",
            "when": "When the Admin updates valid data.",
            "then": "Then the system saves the new data and retains the current Active/Inactive status."
          },
          {
            "title": "AC-06 — Change surcharge status",
            "given": "Given the surcharge configuration is Active or Inactive.",
            "when": "When the Admin performs a valid surcharge status change.",
            "then": "Then the system saves the new status."
          },
          {
            "title": "AC-07 — Exclude Inactive configurations",
            "given": "Given a surcharge configuration is Inactive.",
            "when": "When the system determines the surcharge for a new Handwritten card.",
            "then": "Then the Inactive configuration is not used."
          }
        ],
        "rules": [
          {
            "id": "BR-237–BR-241",
            "text": "Create and validate handwriting surcharge configurations."
          },
          {
            "id": "BR-242–BR-245",
            "text": "Surcharge configuration updates."
          },
          {
            "id": "BR-218, BR-228–BR-231",
            "text": "Surcharge status management."
          },
          {
            "id": "BR-239",
            "text": "Conditions for using surcharge configurations in pricing."
          }
        ]
      },
      {
        "id": "US-C08",
        "featureGroup": "F02 — Greeting Card Configuration Management",
        "title": "Manage AI Free card templates",
        "source": "STORY-069, STORY-070, STORY-071, STORY-072, STORY-073",
        "story": "As an Admin authorized to manage AI Free card templates, I want to manage the free card template list, so that I can offer suitable card options to customers.",
        "criteria": [
          {
            "title": "AC-01 — View AI Free templates",
            "given": "Given the Admin has access permission.",
            "when": "When the Admin opens the AI Free card template list.",
            "then": "Then the system displays templates and corresponding management information."
          },
          {
            "title": "AC-02 — Add an AI Free template",
            "given": "Given the Admin is creating an AI Free card template.",
            "when": "When the Admin enters a name of at most 100 characters, a description of at most 200 characters and a valid Preview image.",
            "then": "Then the system creates the template with the default status defined by the business configuration."
          },
          {
            "title": "AC-03 — Validate the AI Free image file",
            "given": "Given the Admin uploads a Preview image outside PNG/JPG/JPEG formats.",
            "when": "When the Admin submits the template creation request.",
            "then": "Then the system rejects the file and does not create the template."
          },
          {
            "title": "AC-04 — Update an AI Free template",
            "given": "Given the AI Free card template exists.",
            "when": "When the Admin updates valid information.",
            "then": "Then the system saves the changed information."
          },
          {
            "title": "AC-05 — Change AI Free template status",
            "given": "Given the card template is Active or Inactive.",
            "when": "When the Admin requests a valid status change.",
            "then": "Then the system updates the corresponding status."
          },
          {
            "title": "AC-06 — Delete an AI Free template",
            "given": "Given the Admin is authorized and the template may be deleted.",
            "when": "When the Admin performs a valid deletion.",
            "then": "Then the system applies the AI Free card template management rules."
          }
        ],
        "rules": [
          {
            "id": "BR-257–BR-260",
            "text": "AI Free card template creation and data validation."
          },
          {
            "id": "BR-264–BR-266",
            "text": "AI Free card template Active/Inactive status management."
          }
        ],
        "rulesNote": "Detailed update and deletion rules are described in STORY-071 and STORY-072."
      },
      {
        "id": "US-C09",
        "featureGroup": "F02 — Greeting Card Configuration Management",
        "title": "Manage card configuration availability status",
        "source": "STORY-059, STORY-060, STORY-063, STORY-064, STORY-073",
        "note": "This composite story presents card configuration lifecycle controls. It overlaps detailed configuration stories and should not automatically be counted as an independent development item.",
        "story": "As an Admin authorized to manage card configurations, I want to activate or deactivate configurations, so that customers can only select data appropriate to the current system state.",
        "criteria": [
          {
            "title": "AC-01 — Set a configuration to Inactive",
            "given": "Given a configuration is eligible for a status transition.",
            "when": "When the Admin confirms changing it to Inactive.",
            "then": "Then the system updates the status according to that configuration type rules."
          },
          {
            "title": "AC-02 — Set a configuration to Active",
            "given": "Given the configuration is Inactive and meets activation conditions.",
            "when": "When the Admin confirms changing it to Active.",
            "then": "Then the system updates Active status."
          },
          {
            "title": "AC-03 — Confirm the action",
            "given": "Given the status change requires confirmation.",
            "when": "When the Admin selects the status change.",
            "then": "Then the system displays a confirmation popup before saving."
          },
          {
            "title": "AC-04 — Preserve status on cancellation",
            "given": "Given the confirmation popup is displayed.",
            "when": "When the Admin cancels the action.",
            "then": "Then the system retains the configuration status."
          },
          {
            "title": "AC-05 — Check status-change permissions",
            "given": "Given the user has no configuration management permission.",
            "when": "When the user submits a status-change request.",
            "then": "Then the backend rejects the request."
          }
        ],
        "rules": [
          {
            "id": "BR-205–BR-209",
            "text": "Custom AI card Template status management."
          },
          {
            "id": "BR-223–BR-227",
            "text": "Card size status management."
          },
          {
            "id": "BR-218, BR-228–BR-231",
            "text": "Handwriting surcharge status management."
          },
          {
            "id": "BR-264–BR-266",
            "text": "AI Free card template status management."
          }
        ]
      },
      {
        "id": "US-C10",
        "featureGroup": "F02 — Greeting Card Configuration Management",
        "title": "Manage card configuration data integrity",
        "source": "STORY-055, STORY-058, STORY-060, STORY-067, STORY-068",
        "note": "This composite story brings together important data controls; it is not a standalone User Story in the original document. It overlaps detailed configuration stories and should not automatically be counted as an independent development item.",
        "story": "As an Admin managing card configuration data, I want the system to validate and protect configuration integrity, so that inconsistent data does not affect card selection and pricing.",
        "criteria": [
          {
            "title": "AC-01 — Validate required configuration fields",
            "given": "Given the Admin is creating or updating a configuration.",
            "when": "When required data is missing.",
            "then": "Then the system refuses to save and displays errors at the relevant fields."
          },
          {
            "title": "AC-02 — Validate configuration values",
            "given": "Given the Admin enters invalid values such as a negative price or invalid maximum word count.",
            "when": "When the Admin selects Save.",
            "then": "Then the system refuses to save under the rules of the configuration type."
          },
          {
            "title": "AC-03 — Validate surcharge data",
            "given": "Given the Admin defines a word-count range for handwriting surcharges.",
            "when": "When the range is invalid or overlaps another Active configuration.",
            "then": "Then the system rejects the configuration."
          },
          {
            "title": "AC-04 — Preserve data when an operation fails",
            "given": "Given the system cannot complete a save operation.",
            "when": "When a processing error occurs.",
            "then": "Then the system must not report success or leave inconsistent data."
          },
          {
            "title": "AC-05 — Soft deletion",
            "given": "Given a configuration type uses soft deletion.",
            "when": "When the Admin deletes the record.",
            "then": "Then the system follows the soft-deletion mechanism instead of automatically deleting all related data."
          }
        ],
        "rules": [
          {
            "id": "BR-191–BR-193",
            "text": "Card size data validation."
          },
          {
            "id": "BR-201–BR-204",
            "text": "Card template validation and saving."
          },
          {
            "id": "BR-210–BR-214",
            "text": "Card template deletion and data preservation."
          },
          {
            "id": "BR-237–BR-245",
            "text": "Handwriting surcharge validation and updates."
          }
        ]
      },
      {
        "id": "US-C11",
        "featureGroup": "F03 — AI Content Monitoring",
        "title": "Monitor Custom AI flower design history",
        "source": "STORY-047, STORY-048",
        "story": "As an Admin authorized to manage AI Custom, I want to view customer AI flower designs and their details, so that I can inspect results, configuration data and related orders.",
        "criteria": [
          {
            "title": "AC-01 — View AI flower results",
            "given": "Given the Admin has permission to view AI Custom data.",
            "when": "When the Admin opens AI Custom → Flower designs.",
            "then": "Then the system displays results with valid images, newest first."
          },
          {
            "title": "AC-02 — Display flower result information",
            "given": "Given the list contains AI results.",
            "when": "When the system displays the table.",
            "then": "Then each item includes a Preview image, flower design ID, customer, source Combo, creation date and actions."
          },
          {
            "title": "AC-03 — Search and filter flower results",
            "given": "Given the list contains relevant data.",
            "when": "When the Admin searches by customer, Order ID or flower design ID, or filters by Combo.",
            "then": "Then the system displays results matching the conditions."
          },
          {
            "title": "AC-04 — View flower design details",
            "given": "Given the Admin selects an AI result.",
            "when": "When the Admin opens Flower Design Details.",
            "then": "Then the system displays customer information, source Combo, Core/Support components, Mockup, customization request and linked Orders."
          },
          {
            "title": "AC-05 — Preview the result image",
            "given": "Given the result image is available.",
            "when": "When the Admin selects the Preview image.",
            "then": "Then the system opens an Image Lightbox to view the result."
          },
          {
            "title": "AC-06 — Do not duplicate results",
            "given": "Given a flower design is linked to multiple Orders.",
            "when": "When the Admin views the flower design list.",
            "then": "Then the flower design appears only once in the AI result list."
          }
        ],
        "rules": [
          {
            "id": "BR-132",
            "text": "Access rights: Only users with the corresponding permission may access AI management data."
          },
          {
            "id": "BR-144–BR-146",
            "text": "Custom AI flower list display and search rules."
          },
          {
            "id": "BR-147–BR-149",
            "text": "Flower design detail display rules."
          },
          {
            "id": "BR-150–BR-152",
            "text": "Order linking and related data handling rules."
          }
        ]
      },
      {
        "id": "US-C12",
        "featureGroup": "F03 — AI Content Monitoring",
        "title": "Monitor and download AI card results",
        "source": "STORY-043, STORY-044, STORY-046",
        "story": "As an Admin authorized to manage AI Custom, I want to view history and details and download customer AI card results, so that I can review content and support business operations.",
        "criteria": [
          {
            "title": "AC-01 — View AI cards",
            "given": "Given the Admin has permission to view AI card data.",
            "when": "When the Admin opens AI Custom → Cards.",
            "then": "Then the system displays History records with valid images, newest first."
          },
          {
            "title": "AC-02 — Display card result information",
            "given": "Given the list contains AI cards.",
            "when": "When the system displays the results.",
            "then": "Then each item includes a Preview image, card ID, customer, Template, Size, format and creation date."
          },
          {
            "title": "AC-03 — View AI card details",
            "given": "Given the Admin selects an AI card.",
            "when": "When the Admin opens Card Details.",
            "then": "Then the system displays the image, greeting, Template, Size, format, customer and linked Orders."
          },
          {
            "title": "AC-04 — View the card image",
            "given": "Given the card image is available.",
            "when": "When the Admin selects the Preview image.",
            "then": "Then the system opens an Image Lightbox and displays the image at its correct aspect ratio."
          },
          {
            "title": "AC-05 — Download the card image",
            "given": "Given the Admin has download permission and the image file is available.",
            "when": "When the Admin selects “Download card image”.",
            "then": "Then the system provides the saved result PNG file."
          },
          {
            "title": "AC-06 — No new image on download",
            "given": "Given the Admin downloads a valid card image.",
            "when": "When the system provides the file.",
            "then": "Then AI is not called, no new image or History record is created and customer quota is unchanged."
          },
          {
            "title": "AC-07 — Unavailable image file",
            "given": "Given the History record exists but the image file is inaccessible.",
            "when": "When the Admin opens Card Details.",
            "then": "Then the system retains metadata, displays “Image no longer available” and disables download."
          }
        ],
        "rules": [
          {
            "id": "BR-121–BR-125",
            "text": "AI card detail information rules."
          },
          {
            "id": "BR-126–BR-132",
            "text": "Card history list, search, filtering and access permission rules."
          },
          {
            "id": "BR-140–BR-143",
            "text": "AI card download rules for Admin."
          }
        ]
      }
    ]
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}

function formatScenarioLine(value) {
  const match = /^(Given|When|Then)\s+([\s\S]+)$/.exec(value);
  if (!match) return escapeHtml(value);
  return `<strong>${escapeHtml(match[1])}</strong> <span>${escapeHtml(match[2])}</span>`;
}

function formatValue(value) {
  if (Array.isArray(value)) {
    if (value.length && value.every(item => item && typeof item === 'object' && 'given' in item)) {
      return `<ol class="acceptance-criteria">${value.map(item => `
        <li class="acceptance-criterion"><strong>${escapeHtml(item.title)}</strong>
          <ul><li>${formatScenarioLine(item.given)}</li><li>${formatScenarioLine(item.when)}</li><li>${formatScenarioLine(item.then)}</li></ul>
        </li>`).join('')}</ol>`;
    }
    if (value.length && value.every(item => item && typeof item === 'object' && 'id' in item)) {
      return `<ul class="requirement-rules">${value.map(item => `<li><strong><code>${escapeHtml(item.id)}</code></strong> <span>${escapeHtml(item.text)}</span></li>`).join('')}</ul>`;
    }
    return `<ul>${value.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  }
  return escapeHtml(value);
}

function renderRequirements() {
  const root = document.querySelector('#requirements-root');
  if (!root) return;

  const labels = {
    story: 'User Story', criteria: 'Acceptance Criteria', rules: 'Business Rules'
  };

  root.innerHTML = requirementGroups.map((group, groupIndex) => `
    <section class="requirement-group ${group.group}-requirements" id="${group.group}-requirements" role="tabpanel" aria-labelledby="requirements-tab-${group.group}" tabindex="0">
      ${!group.items.some(item => item.featureGroup) ? `<div class="requirement-group-heading">
        <h3 id="${group.group}-requirements-title">${group.title}</h3>
      </div>` : ''}
      ${group.items.map((item, itemIndex) => {
        const panelId = `${group.group}-requirement-${groupIndex}-${itemIndex}`;
        const fields = Object.entries(labels).map(([key, label]) => `
          <div class="requirement-field"><dt>${label}</dt><dd>${formatValue(item[key])}${key === 'rules' && item.rulesNote ? `<p class="requirement-rules-note">${escapeHtml(item.rulesNote)}</p>` : ''}</dd></div>
        `).join('');
        return `
          ${item.featureGroup && item.featureGroup !== group.items[itemIndex - 1]?.featureGroup ? `<h4 class="requirement-feature-heading">${escapeHtml(item.featureGroup)}</h4>` : ''}
          <article class="requirement-card">
            <button class="requirement-trigger" type="button" aria-expanded="false" aria-controls="${panelId}">
              <span class="requirement-id"><code>${escapeHtml(item.id)}</code></span>
              <span class="requirement-title">${escapeHtml(item.title || item.story)}</span>
              <span class="requirement-icon" aria-hidden="true">+</span>
            </button>
            <div class="requirement-panel" id="${panelId}" hidden>
              ${item.note ? `<p class="requirement-story-note">${escapeHtml(item.note)}</p>` : ''}
              <dl class="requirement-fields">${fields}</dl>
            </div>
          </article>`;
      }).join('')}
    </section>`).join('');

  root.querySelectorAll('.requirement-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });
}

function initializeContents() {
  const navigation = document.querySelector('.toc-sidebar');
  const toggle = document.querySelector('.toc-toggle');
  if (!navigation || !toggle) return;
  document.documentElement.classList.add('js');

  const setOpen = (open) => {
    navigation.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  document.querySelectorAll('.hero a[href="#contents"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const contents = document.getElementById('contents');
      setOpen(false);
      window.history.pushState(null, '', '#contents');
      contents.scrollIntoView({ behavior: 'instant', block: 'start' });
      contents.focus({ preventScroll: true });
      updateReadingState();
    });
  });
}

function initializeWorkstreamTabs(section) {
  const tablist = document.querySelector(`${section} [role="tablist"]`);
  if (!tablist) return;
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const select = (selected) => {
    tabs.forEach((tab) => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.setAttribute('tabindex', active ? '0' : '-1');
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      select(tabs[next]);
      tabs[next].focus();
    });
  });
  select(tabs[0]);
  tablist.hidden = false;
}

function updateReadingState() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const progress = distance > 0 ? Math.min(100, (window.scrollY / distance) * 100) : 0;
  const bar = document.querySelector('#reading-progress');
  if (bar) bar.style.width = `${progress}%`;

  let current = 'overview';
  document.querySelectorAll('[data-section]').forEach((section) => {
    if (section.getBoundingClientRect().top <= 150) current = section.id;
  });
  document.querySelectorAll('.section-nav a').forEach((link) => {
    const active = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function initializeDiagramViewer() {
  const viewer = document.getElementById('diagram-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const image = viewer.querySelector('img');
  const content = viewer.querySelector('.diagram-viewer-content');
  const zoom = viewer.querySelector('[data-diagram-zoom]');
  let trigger;
  const toggleZoom = () => {
    const zoomed = content.classList.toggle('is-zoomed');
    zoom.setAttribute('aria-pressed', String(zoomed));
  };
  document.querySelectorAll('.flower-diagram-link').forEach(link => {
    link.removeAttribute('target');
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      event.preventDefault();
      trigger = link;
      image.src = link.getAttribute('href');
      image.alt = link.querySelector('img').alt;
      content.classList.remove('is-zoomed');
      zoom.setAttribute('aria-pressed', 'false');
      viewer.showModal();
      content.scrollTo(0, 0);
    });
  });
  zoom.addEventListener('click', toggleZoom);
  image.addEventListener('click', toggleZoom);
  viewer.querySelector('[data-diagram-close]').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    image.removeAttribute('src');
    image.alt = '';
    trigger?.focus({ preventScroll: true });
  });
}

renderRequirements();
initializeDiagramViewer();
initializeLanguage();
initializeContents();
initializeWorkstreamTabs('#problem');
initializeWorkstreamTabs('#analysis');
initializeWorkstreamTabs('#requirements');
initializeWorkstreamTabs('#solution');
updateReadingState();
window.addEventListener('scroll', updateReadingState, { passive: true });
window.addEventListener('resize', updateReadingState);
